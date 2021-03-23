import React from 'react';

import { useDate } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from '../default/DefaultPromo';
import { DynamicMessage } from '../default/DynamicMessage';

type Props = {
  currencyCode: string;
  courses: string[];
}

const PromoTest: React.FC<Props> = ({ currencyCode, courses }) => {
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
        dynamicCourseMessages={[ () => <DynamicMessage date={date} courses={courses} /> ]}
        showPromoCodeInput={true}
        shippingOption={true}
        // additionalOptions={additionalOptions}
        // promoCodeDefault="BOGO"
        showDynamicCourseDescriptions={true}
      />
    </>
  );
};

export default PromoTest;
