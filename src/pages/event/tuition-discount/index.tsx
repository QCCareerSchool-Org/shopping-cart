import React from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { TuitionDiscountPromo } from './TuitionDiscountPromo';

type Props = {
  currencyCode: string;
}

const additionalOptions = {
  discount: {
    default: 200,
    GBP: 150,
  },
  discountSignature: 'NIigInzAudp5TBfGRSqrPQ75+tuhQhSc5KC9lodAy/0SeeMIN6YoHDBlv+S0hjjJ+CIm4X5hWaLF3V1QReTE1sznymTCVVVJL5rT2QWFLCMkUMJrPwBCt1xqdQWhU/uQSt0aXYFmWHXI4gCfEQr1AgAZaQPpcWGINhMK5T20+iPqWcCO/e1fX2/t8aQW7co3vkbAZC0iXHp71bihb6RsvJ6mxf5T/5cVg0yiE/KSTxP4nEf0GGz83Z9IYM9B/AKuejgljz4T0bvan8K/kQZDWwN00QjyzW3Llz9XufKiBnELRL8AW24Cbk1FrTNBmOiRxQApMgk8RWnzermCtTAoGA==',
};

const TuitionDiscount: React.FC<Props> = ({ currencyCode }) => (
  <>
    <TuitionDiscountPromo currencyCode={currencyCode} />
    <Form
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={() => <Guarantee />}
      allowNoShipping={true}
      agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
      successLink="https://www.qceventplanning.com/welcome-to-the-school/"
      additionalOptions={additionalOptions}
    />
  </>
);

export default React.memo(TuitionDiscount);
