import React from 'react';

import { useDate } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';
import { Form } from '../../../components/Form';
import { Guarantee } from '../Guarantee';
import { courseGroups } from '../courseGroups';
import { DynamicMessage } from './DynamicMessage';
import { DefaultPromo } from './DefaultPromo';

type Props = {
  courses: string[];
  currencyCode: string;
}

const Default: React.FC<Props> = ({ courses, currencyCode }) => {
  return (
    <>
      <DefaultPromo currencyCode={currencyCode} />
      <Form
        courseGroups={courseGroups}
        school="QC Event School"
        guarantee={() => <Guarantee />}
        shippingOption={true}
        agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
        agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
        successLink="https://www.qceventplanning.com/welcome-to-the-school/"
        dynamicCourseMessages={[ () => <DynamicMessage courses={courses} /> ]}
      />
    </>
  );
};

export default Default;
