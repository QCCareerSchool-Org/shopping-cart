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

  const promoCodeStart = date >= new Date('2021-03-29T09:00:00-04:00');

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
        coursesSubtitle={date >= new Date('2021-03-27T08:00:00-0400') ? undefined : () => <BuyOneGetOne />}
        dynamicCourseMessages={[ () => <DynamicMessage date={date} courses={courses} /> ]}
        showPromoCodeInput={promoCodeStart}
        showDynamicCourseDescriptions={promoCodeStart}
        additionalOptions={date >= new Date('2021-03-27T08:00:00-04:00') && !promoCodeStart ? additionalOptionsDeluxeKit : additionalOptionsNone}
      />
    </>
  );
};

export default Default;
