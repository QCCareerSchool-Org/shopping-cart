import React from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { DynamicMessage } from './DynamicMessage';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from './DefaultPromo';
import { useDate } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

type Props = {
  courses: string[];
  currencyCode: string;
}

const portfolioAdditionalOptions = { portfolio: true };

const Default: React.FC<Props> = ({ courses, currencyCode }) => {
  const serverDate = useDate();

  const date = dateOverride() ?? serverDate;

  let additionalOptions;
  if (date >= new Date('2021-02-13T08:00:00-05:00') && date < new Date('2021-02-16T08:00:00-05:00')) {
    additionalOptions = portfolioAdditionalOptions;
  }

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
        additionalOptions={additionalOptions}
      />
    </>
  );
};

export default Default;
