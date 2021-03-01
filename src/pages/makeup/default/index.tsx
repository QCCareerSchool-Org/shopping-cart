import React, { useMemo } from 'react';

import { useDate } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DynamicMessage } from './DynamicMessage';
import { DefaultPromo } from './DefaultPromo';
import { BuyOneGetOne } from '../../../components/BuyOneGetOne';

type Props = {
  currencyCode: string;
  courses: string[];
}

const Default: React.FC<Props> = ({ currencyCode, courses }) => {
  const serverDate = useDate();
  const date = dateOverride() || serverDate;

  const dynamicCourseMessages = useMemo(() => {
    if (date >= new Date('2021-03-02T08:00:00-05:00')) {
      return [];
    } else {
      return [ () => <DynamicMessage courses={courses} /> ];
    }
  }, [ date, courses ]);

  const additionalOptions = useMemo(() => {
    if (date >= new Date('2021-03-02T08:00:00-05:00')) {
      return { deluxeKit: true };
    } else {
      return {};
    }
  }, [ date ]);

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
        dynamicCourseMessages={dynamicCourseMessages}
        additionalOptions={additionalOptions}
      />
    </>
  );
};

export default Default;
