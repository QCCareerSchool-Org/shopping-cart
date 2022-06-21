/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { useEffect, useState } from 'react';

import { useDispatchContext } from '../hooks/useDispatchContext';
import { useGeoLocation } from '../hooks/useGeoLocation';
import { useGoogleAnalyticsBehaviour } from '../hooks/useGoogleAnalyticsBehaviour';
import { useInitialData } from '../hooks/useInitialData';
import { usePriceUpdater } from '../hooks/usePriceUpdater';
import { useStateContext } from '../hooks/useStateContext';

import { addEnrollment, chargeEnrollment, EnrollmentPayload, School, updateEnrollment } from '../lib/enrollment';
import { EnrollmentError } from '../lib/enrollmentError';
import { scrollToPosition } from '../lib/scrollToPosition';

import { CourseGroup } from '../state/courses';

import { Address } from './Address';
import { CourseSelection } from './CourseSelection';
import { ErrorModal } from './ErrorModal';
import { Internal } from './Internal';
import { Overrides } from './Overrides';
import { Payment } from './Payment';
import { Summary } from './Summary';
import { PaysafeCompany } from './Summary/PaymentModal';

type EnrollmentData = {
  id: number;
  code: number;
};

type ErrorModalData = {
  open: boolean;
  title: string;
  message: string | JSX.Element;
};

type Props = {
  courseGroups: CourseGroup[];
  school: School;
  courseOverride?: string[];
  /** the guarantee component to display in the summary section */
  guarantee: () => JSX.Element;
  /** a component to display below the courses title */
  coursesSubtitle?: () => JSX.Element;
  /** an array of components to display below the course selection checkboxes */
  dynamicCourseMessages?: Array<() => JSX.Element | null>;
  /** whether this is an internal shopping cart (allows toggling student status) */
  internal?: boolean;
  /** whether the person enrolling is an existing student or not */
  student?: boolean;
  /** whether we allow overriding the deposit and installments */
  allowOverrides?: boolean;
  /** allow students to chose whether to have materials shipped or not */
  shippingOption?: boolean;
  /** reverse the shipping option from opt in to online only to opt in to shipping, requires shippingOption to be true */
  shippingOptionReversed?: boolean;
  /** the default setting for shipping */
  noShipping?: boolean;
  /** the title for the no-shipping discount */
  noShippingTitle?: string;
  /** where to send the visitor after a sucessfull enrollment */
  successLink: string;
  /** url of enrollment agreement */
  agreementLink: string;
  /** url of enrollment agreement for UK students */
  agreementLinkGB: string;
  /** Additional options to send to the back end when looking up prices or enrolling */
  additionalOptions?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  /** a function that determines whether we should show a confirmation message before proceeding to payment */
  showSubmitMessage?: () => boolean;
  /** a component for the confirmation message (will appear in a popup) */
  submitMessage?: () => JSX.Element;
  /** the title of the confirmation popup */
  submitTitle?: string;
  /** whether to show the promo code input or not */
  showPromoCodeInput?: boolean;
  /** a default promo code */
  promoCodeDefault?: string;
  /** whether to show the dynamic course descriptions */
  showDynamicCourseDescriptions?: boolean;
  /** wether to reverse the order of the payment options */
  paymentOptionsReverse?: boolean;
};

export const Form: React.FC<Props> = props => {
  const { courses, address, payment, meta, overrides } = useStateContext();
  const dispatch = useDispatchContext();

  useGeoLocation(); // set initial country and province based on ip

  usePriceUpdater(props.school, props.promoCodeDefault, props.allowOverrides, props.additionalOptions); // update prices when courses, country, etc. change

  const [ logCheckout ] = useGoogleAnalyticsBehaviour();

  useEffect(() => {
    dispatch({ type: 'SET_COURSE_GROUPS', payload: props.courseGroups });
  }, [ dispatch, props.courseGroups ]);

  useInitialData(!!props.internal, !!props.paymentOptionsReverse); // load initial data from sessionStorage and query string

  useEffect(() => {
    dispatch({ type: 'SET_STUDENT', payload: !!props.student });
  }, [ dispatch, props.student ]);

  useEffect(() => {
    dispatch({ type: 'SET_NO_SHIPPING', payload: !!props.noShipping });
  }, [ dispatch, props.noShipping ]);

  useEffect(() => {
    if (props.courseOverride) {
      dispatch({ type: 'CLEAR_COURSES', payload: { internal: !!props.internal } });
      props.courseOverride.forEach(c => dispatch({ type: 'ADD_COURSE', payload: { courseCode: c, internal: !!props.internal } }));
    }
  }, [ dispatch, props.courseOverride, props.internal ]);

  const [ enrollment, setEnrollment ] = useState<EnrollmentData | null>(null);
  const [ errorModal, setErrorModal ] = useState<ErrorModalData>({ open: false, title: '', message: '' });

  const toggleErrorModal = (): void => {
    setErrorModal(prevState => ({ ...prevState, open: !prevState.open }));
  };

  const createEnrollmentPayload = (): EnrollmentPayload => {
    const payload = {
      courses: courses.selected,
      title: address.title,
      firstName: address.firstName,
      lastName: address.lastName,
      address1: address.address1,
      address2: address.address2,
      city: address.city,
      provinceCode: address.provinceCode,
      postalCode: address.postalCode,
      countryCode: address.countryCode,
      emailAddress: address.emailAddress,
      telephoneNumber: address.telephoneNumber,
      paymentPlan: payment.plan,
      paymentDay: payment.day,
      school: props.school,
      url: window.location.pathname,
      discountCode: '',
      campaignId: null,
      existingStudent: meta.student,
      options: {
        noShipping: payment.noShipping,
        discountAll: meta.student,
        studentDiscount: meta.studentDiscount,
        school: props.school,
        promoCode: props.promoCodeDefault ?? meta.promoCode,
        ...props.additionalOptions,
      },
    };

    if (props.allowOverrides) {
      payload.options = {
        ...payload.options,
        installmentsOverride: Math.max(1, overrides.installments),
        depositOverrides: overrides.courses.reduce<{ [key: string]: number }>((prev, cur) => {
          prev[cur.code] = cur.value;
          return prev;
        }, {}),
      };
    }

    return payload;
  };

  const saveForm = (): void => {
    if (window.sessionStorage) {
      window.sessionStorage.setItem('form', JSON.stringify({
        courses: courses.selected,
        title: address.title,
        firstName: address.firstName,
        lastName: address.lastName,
        emailAddress: address.emailAddress,
        telephoneNumber: address.telephoneNumber,
        address1: address.address1,
        address2: address.address1,
        city: address.city,
        provinceCode: address.provinceCode,
        postalCode: address.postalCode,
        countryCode: address.countryCode,
        paymentDay: payment.day,
        paymentPlan: payment.plan,
      }));
    }
  };

  const addToDatabase = async (): Promise<boolean> => {
    saveForm();
    logCheckout();
    dispatch({ type: 'CLEAR_ENROLLMENT_ERRORS' });
    try {
      if (enrollment) {
        const { id, code } = await updateEnrollment(enrollment.id, createEnrollmentPayload());
        setEnrollment({ id, code });
      } else {
        const { id, code } = await addEnrollment(createEnrollmentPayload());
        setEnrollment({ id, code });
      }
      return true;
    } catch (err) {
      if (err instanceof EnrollmentError) {
        if (err.code === 1) { // course error
          scrollToPosition('courses');
        } else if (err.code === 2) { // payment plan
          scrollToPosition('plan');
        } else if (err.code === 3) { // address error
          scrollToPosition('shipping');
        }
        dispatch({ type: 'SET_ENROLLMENT_ERRORS', payload: err.enrollmentErrors });
      }
      return false;
    }
  };

  const charge = async (token: string, company: PaysafeCompany): Promise<boolean> => {
    try {
      if (!enrollment) {
        throw Error('enrollment is undefined');
      }
      await chargeEnrollment(enrollment.id, token, company);
      window.sessionStorage.removeItem('form');
      window.location.href = `${props.successLink}?enrollmentId=${enrollment.id}&code=${enrollment.code}`;
      return true;
    } catch (err: any) {
      setEnrollment(null); // we'll start over with a new enrollment record if the user tries again
      let errorMessage: JSX.Element;
      let errorTitle: string;
      switch (err.message) {
        case 'NSF':
          errorTitle = 'Insufficient Funds';
          errorMessage = <p>The transaction was declined due to insufficient funds in your account. Please use a different card or contact your bank.</p>;
          break;
        case 'AVS check failed':
          errorTitle = 'Address Check Error';
          errorMessage = <div><p>There was an error processing your card. Please make sure that your shipping address matches the billing address for your card.</p><p>Attempting to process a payment without a matching address may result in your funds being held for three to five days by the payment processor.</p></div>;
          break;
        case 'Declined by bank':
          errorTitle = 'Financial Institution Refusal';
          errorMessage = <p>There was an error processing your card. Please call the telephone number on the back of your card and authorize the transaction.</p>;
          break;
        default:
          errorTitle = 'Processing Error';
          errorMessage = <div><p>There was an error processing your card. Please double check your card details.</p><p>If your card details are correct, please call the telephone number on the back of your card to authorize the transaction.</p></div>;
      }
      setErrorModal({ open: true, title: errorTitle, message: errorMessage });
      return false;
    }
  };

  return (
    <>
      {props.internal && <Internal />}
      {<CourseSelection
        internal={!!props.internal}
        coursesSubtitle={props.coursesSubtitle}
        dynamicCourseMessages={props.dynamicCourseMessages}
        courseOverride={!!props.courseOverride}
        shippingOptionReversed={!!props.shippingOptionReversed}
        showDynamicCourseDescriptions={!!props.showDynamicCourseDescriptions}
      />}
      <Address school={props.school} />
      <Payment
        school={props.school}
        shippingOption={!!props.shippingOption}
        shippingOptionReversed={!!props.shippingOptionReversed}
        noShippingTitle={props.noShippingTitle}
        showPromoCodeInput={!!props.showPromoCodeInput && !props.promoCodeDefault}
        paymentOptionsReverse={!!props.paymentOptionsReverse}
      />
      {props.allowOverrides && payment.plan === 'part' && <Overrides />}
      <Summary
        guarantee={props.guarantee}
        addToDatabase={addToDatabase}
        charge={charge}
        scrollToPosition={scrollToPosition}
        agreementLink={props.agreementLink}
        agreementLinkGB={props.agreementLinkGB}
        showSubmitMessage={props.showSubmitMessage}
        submitMessage={props.submitMessage}
        submitTitle={props.submitTitle}
        showPromoCodeInput={!!props.showPromoCodeInput}
      />
      <ErrorModal toggle={toggleErrorModal} isOpen={errorModal.open} title={errorModal.title} message={errorModal.message} />
    </>
  );
};
