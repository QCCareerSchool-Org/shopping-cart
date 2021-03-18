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

const additionalOptions = {
  discount: {
    default: 3000,
  },
  discountSignture: 'tBFv7o30ebuC4+ijdqWSzQ7l49eGW01U99ZPhHIGbjbgl7pbt5Yzd+zfyync1N84Byd81LyWYNKDbvfWmQWcvi2kw0DEWhY0QVE0CfRanIlGLuB/UZk7D1ij6ut5ilMT48ao9WlW1XhT804eO9m1WDS9/LalMXvbAb29N87MvyRPJxMCYlMm0ICRqzq3pStE8MQYOWQU3fkU3fVqb6Fhm6AlZkGFPvgo1Ei9Vax/65DrwUtf4CE34HjKPMt2l1UHS54MCL2sxpJI2Lj92yf4JVcg+p4xyq1SPccynHfOJDwndItOJexfrbLnNGQZ8ccQVFYcZITFxlf5zaMzuVMSNQ==',
};

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
      />
    </>
  );
};

export default PromoTest;
