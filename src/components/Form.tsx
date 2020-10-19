import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';

import { useGeoLocation } from '../hooks/useGeoLocation';
import { usePriceUpdater } from '../hooks/usePriceUpdater';
import { useInitialData } from '../hooks/useInitialData';
import { useDispatchContext } from '../hooks/useDispatchContext';
import { useGoogleAnalyticsBehaviour } from '../hooks/useGoogleAnalyticsBehaviour';

import { CourseGroup } from '../state/courses';

import { Address } from './Address';
import { Summary } from './Summary';
import { Payment } from './Payment';
import { Internal } from './Internal';
import { Overrides } from './Overrides';
import { CourseSelection } from './CourseSelection';
import { addEnrollment, chargeEnrollment, EnrollmentPayload, updateEnrollment } from '../lib/enrollment';
import { PaysafeCompany } from './Summary/PaymentModal';
import { EnrollmentError, EnrollmentErrors } from '../lib/enrollmentError';
import { useStateContext } from '../hooks/useStateContext';
import { ErrorModal } from './ErrorModal';
import { telephoneNumber } from '@qccareerschool/helper-functions';

type EnrollmentData = {
  id: number;
  code: number;
}

type ErrorModalData = {
  open: boolean;
  title: string;
  message: string | JSX.Element;
}

export type School = 'QC Makeup Academy' | 'QC Event School' | 'QC Design School' | 'QC Pet Studies';

export type Props = {
  courseGroups: CourseGroup[];
  school: School;
  /** the guarantee component to display in the summary section */
  guarantee: () => JSX.Element;
  /** a component to display below the courses title */
  coursesSubtitle?: () => JSX.Element;
  /** an array of components to display below the course selection checkboxes */
  dynamicCourseMessages?: Array<() => JSX.Element>;
  /** whether this is an internal shopping cart (allows toggling student status) */
  internal?: boolean;
  /** whether the person enrolling is an existing student or not */
  student?: boolean;
  /** whether we allow overriding the deposit and installments */
  allowOverrides?: boolean;
  /** allow students to choose the no-shiping discount */
  allowNoShipping?: boolean;
  /** the name for the no-shipping discount */
  greenDiscount?: string;
  /** where to send the visitor after a sucessfull enrollment */
  successLink: string;
  /** url of enrollment agreement */
  agreementLink: string;
  /** url of enrollment agreement for UK students */
  agreementLinkGB: string;
  /** Additional options to send to the back end when looking up prices or enrolling */
  additionalOptions?: any;
}

export const scrollToPosition = (section: 'courses' | 'shipping' | 'plan'): void => {
  const scrollProps = {
    duration: 500,
    smooth: true,
  };
  if (section === 'courses') {
    scroller.scrollTo('courses-section', scrollProps);
  } else if (section === 'shipping') {
    scroller.scrollTo('address-section', scrollProps);
  } else if (section === 'plan') {
    scroller.scrollTo('payment-section', scrollProps);
  }
};

export const Form: React.FC<Props> = props => {
  const { courses, address, payment, meta } = useStateContext();
  const dispatch = useDispatchContext();

  useGeoLocation(); // set initial country and province based on ip

  usePriceUpdater(props.additionalOptions); // update prices when courses, country, etc. change

  useGoogleAnalyticsBehaviour();

  useEffect(() => {
    dispatch({ type: 'SET_COURSE_GROUPS', payload: props.courseGroups });
  }, [ dispatch, props.courseGroups ]);

  useEffect(() => {
    dispatch({ type: 'CLEAR_COURSES', payload: { internal: !!props.internal } });
  }, [ dispatch, props.internal ]);

  useInitialData(!!props.internal); // load initial data from sessionStorage and query string

  useEffect(() => {
    dispatch({ type: 'SET_STUDENT', payload: !!props.student });
  }, [ dispatch, props.student ]);

  const [ enrollment, setEnrollment ] = useState<EnrollmentData | null>(null);
  const [ errorModal, setErrorModal ] = useState<ErrorModalData>({ open: false, title: '', message: '' });

  const toggleErrorModal = () => {
    setErrorModal(prevState => ({ ...prevState, open: !prevState.open }));
  };

  const createEnrollmentPayload = (): EnrollmentPayload => ({
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
      ...props.additionalOptions,
    },
  });

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
    dispatch({ type: 'CLEAR_ENROLLMENT_ERRORS' });
    try {
      if (enrollment) {
        await updateEnrollment(enrollment.id, createEnrollmentPayload());
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

  const charge = async (token: string, company: PaysafeCompany) => {
    try {
      if (!enrollment) {
        throw Error('enrollment is undefined');
      }
      await chargeEnrollment(enrollment.id, token, company);
      window.sessionStorage.removeItem('form');
      window.location.href = `${props.successLink}?enrollmentId=${enrollment.id}&code=${enrollment.code}`;
    } catch (err) {
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
    }
  };

  return (
    <>
      {props.internal && <Internal />}
      <a id="courses-section"></a>
      <CourseSelection
        internal={!!props.internal}
        coursesSubtitle={props.coursesSubtitle}
        dynamicCourseMessages={props.dynamicCourseMessages}
      />
      <Address />
      <Payment
        school={props.school}
        allowNoShipping={!!props.allowNoShipping}
        greenDiscount={props.greenDiscount}
      />
      {props.allowOverrides && <Overrides />}
      <Summary guarantee={props.guarantee} addToDatabase={addToDatabase} charge={charge} />
      <ErrorModal toggle={toggleErrorModal} isOpen={errorModal.open} title={errorModal.title} message={errorModal.message} />
    </>
  );
};
