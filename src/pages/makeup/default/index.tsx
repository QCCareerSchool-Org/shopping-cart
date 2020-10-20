import React from 'react';

import { Form } from '../../../components/Form';
import { useStateContext } from '../../../hooks/useStateContext';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from './DefaultPromo';
import { DynamicMessage } from './DynamicMessage';

export const Default: React.FC = () => {
  const { courses, address, price } = useStateContext();
  return (
    <>
      <DefaultPromo countryCode={address.countryCode} currencyCode={price?.currency.code ?? 'USD'} />
      <Form
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={() => <Guarantee />}
        agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
        agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
        dynamicCourseMessages={[ props => <DynamicMessage {...props} courses={courses.selected} /> ]}
      />
    </>
  );
};
