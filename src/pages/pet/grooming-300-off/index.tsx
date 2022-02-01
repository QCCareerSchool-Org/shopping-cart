import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { Promo } from './promo';

type Props = {
  courses: string[];
  currencyCode: string;
};

const Grooming300Off = ({ courses, currencyCode }: Props): ReactElement => (
  <>
    <Promo />
    <Form
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcpetstudies.com/enrollment-agreement"
      agreementLinkGB="https://www.qcpetstudies.com/enrollment-agreement-gb"
      successLink="https://www.qcpetstudies.com/welcome-to-the-school"
      promoCodeDefault="DG300"
      dynamicCourseMessages={[ () => <DynamicMessage courses={courses} currencyCode={currencyCode} /> ]}
    />
  </>
);

interface DynamicMessageProps {
  courses: string[];
  currencyCode: string;
}

const DynamicMessage = ({ courses, currencyCode }: DynamicMessageProps): ReactElement | null => {
  const discount = currencyCode === 'GBP' ? '£300' : '$300';
  if (courses.length === 0) {
    return null;
  } else if (!courses.includes('DG')) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Select the <strong>Dog Grooming</strong> course to get {discount} off your tuition</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Discount applied!</p>;
};

export default Grooming300Off;
