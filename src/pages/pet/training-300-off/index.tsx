import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

import { BuyOneGetOne } from '../../../components/BuyOneGetOne';
import { Form } from '../../../components/Form';
import { BOGODynamicMessage } from '../BOGODynamicMessage';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { Promo } from './promo';

const Trainging300Off = (): ReactElement => (
  <>
    <Promo />
    <Form
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qcpetstudies.com/enrollment-agreement"
      agreementLinkGB="https://www.qcpetstudies.com/enrollment-agreement-gb"
      successLink="https://www.qcpetstudies.com/welcome-to-the-school"
      promoCodeDefault="DT300"
      dynamicCourseMessages={[ () => <BOGODynamicMessage /> ]}
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
  } else if (!courses.includes('DT')) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Select the <strong>Dog Training</strong> course to get {discount} off your tuition</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Discount applied!</p>;
};

export default Trainging300Off;
