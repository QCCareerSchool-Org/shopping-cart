import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

import { Form } from '../../../components/Form';
import { useStateContext } from '../../../hooks/useStateContext';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { PetCoursesSubtitle } from '../PetCoursesSubtitle';
import { Promo } from './promo';

const Grooming500Off = (): ReactElement => (
  <>
    <Promo />
    <Form
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <PetCoursesSubtitle />}
      agreementLink="https://www.qcpetstudies.com/enrollment-agreement"
      agreementLinkGB="https://www.qcpetstudies.com/enrollment-agreement-gb"
      successLink="https://www.qcpetstudies.com/welcome-to-the-school"
      promoCodeDefault="DG500"
      dynamicCourseMessages={[ () => <DynamicMessage /> ]}
    />
  </>
);

const DynamicMessage = (): ReactElement | null => {
  const { courses, price } = useStateContext();
  const discount = price?.currency.code === 'GBP' ? '£415' : '$500';
  if (courses.selected.length === 0) {
    return null;
  } else if (!courses.selected.includes('DG')) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Select the <strong>Dog Grooming</strong> course to get {discount} off your tuition</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Discount applied!</p>;
};

export default Grooming500Off;
