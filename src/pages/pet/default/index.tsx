import React from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from './DefaultPromo';

type Props = {
  countryCode: string;
  currencyCode: string;
  courses: string[];
}

const additionalOptions = {
  discount: {
    default: 200,
    GBP: 150,
  },
  discountSignature: 'NIigInzAudp5TBfGRSqrPQ75+tuhQhSc5KC9lodAy/0SeeMIN6YoHDBlv+S0hjjJ+CIm4X5hWaLF3V1QReTE1sznymTCVVVJL5rT2QWFLCMkUMJrPwBCt1xqdQWhU/uQSt0aXYFmWHXI4gCfEQr1AgAZaQPpcWGINhMK5T20+iPqWcCO/e1fX2/t8aQW7co3vkbAZC0iXHp71bihb6RsvJ6mxf5T/5cVg0yiE/KSTxP4nEf0GGz83Z9IYM9B/AKuejgljz4T0bvan8K/kQZDWwN00QjyzW3Llz9XufKiBnELRL8AW24Cbk1FrTNBmOiRxQApMgk8RWnzermCtTAoGA==',
};

const Default: React.FC<Props> = ({ countryCode, currencyCode, courses }) => (
  <>
    <DefaultPromo countryCode={countryCode} currencyCode={currencyCode} />
    <Form
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={() => <Guarantee />}
      shippingOption={true}
      noShippingTitle="Use Your Own Tools"
      agreementLink="https://www.doggroomingcourse.com/enrollment-agreement.html"
      agreementLinkGB="https://www.doggroomingcourse.com/enrollment-agreement-gb.html"
      successLink="https://www.doggroomingcourse.com/welcome-to-the-school/"
      additionalOptions={additionalOptions}
    />
  </>
);

export default Default;
