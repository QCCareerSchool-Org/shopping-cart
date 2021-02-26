import React, { useEffect, useMemo, useState } from 'react';

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
  const serverDate = useDate();

  const additionalOptions = useMemo(() => {
    const date = dateOverride() ?? serverDate;
    if (date >= new Date('2021-02-27T08:00:00-05:00') && date < new Date('2021-03-02T08:00:00-05:00')) {
      return { portfolio: true };
    } else {
      return {};
    }
  }, [ serverDate ]);

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
