import React from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from './DefaultPromo';
import { DynamicMessage } from './DynamicMessage';

type Props = {
  countryCode: string;
  currencyCode: string;
  courses: string[];
}

export const Default: React.FC<Props> = ({ countryCode, currencyCode, courses }) => (
  <>
    <DefaultPromo countryCode={countryCode} currencyCode={currencyCode} />
    <Form
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
      dynamicCourseMessages={[ props => <DynamicMessage {...props} courses={courses} /> ]}
    />
  </>
);
