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

const additionalOptionsNone = {};
const additionalOptionsPortfolio = { portfolio: true };

const Default: React.FC<Props> = ({ courses, currencyCode }) => {
  const serverDate = useDate();
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
        additionalOptions={date >= new Date('2021-03-13T08:00:00-05:00') && date < new Date('2021-03-15T09:00:00-04:00') ? additionalOptionsPortfolio : additionalOptionsNone}
      />
    </>
  );
};

export default Default;
