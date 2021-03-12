import React from 'react';

import { useDate } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from './DefaultPromo';
import { BuyOneGetOne } from '../../../components/BuyOneGetOne';
import { DynamicMessage } from './DynamicMessage';

type Props = {
  currencyCode: string;
  courses: string[];
}

const additionalOptionsDeluxeKit = { deluxeKit: true };
const additionalOptionsNone = {};

const Default: React.FC<Props> = ({ currencyCode, courses }) => {
  const serverDate = useDate();
  const date = dateOverride() || serverDate;

  return (
    <>
      <DefaultPromo date={date} currencyCode={currencyCode} />
      <Form
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={() => <Guarantee />}
        agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
        agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
        coursesSubtitle={() => <BuyOneGetOne />}
        dynamicCourseMessages={[ () => <DynamicMessage date={date} courses={courses} /> ]}
        additionalOptions={date >= new Date('2021-03-15T09:00:00-04:00') ? additionalOptionsNone : additionalOptionsDeluxeKit}
      />
    </>
  );
};

export default Default;
