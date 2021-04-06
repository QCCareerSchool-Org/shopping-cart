import React from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
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
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;

  return (
    <>
      <DefaultPromo date={date} currencyCode={currencyCode} />
      <Form
        courseGroups={courseGroups}
        school="QC Event School"
        guarantee={() => <Guarantee />}
        shippingOption={true}
        agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
        agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
        successLink="https://www.qceventplanning.com/welcome-to-the-school/"
        dynamicCourseMessages={[ () => <DynamicMessage date={date} courses={courses} /> ]}
      />
    </>
  );
};

export default Default;
