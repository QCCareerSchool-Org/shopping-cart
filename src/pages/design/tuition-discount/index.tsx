import React, { ReactElement } from 'react';

import { BuyOneGetOne } from '../../../components/BuyOneGetOne';
import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { TuitionDiscountPromo } from './TuitionDiscountPromo';

const additionalOptions = {
  discount: {
    default: 200,
    GBP: 150,
  },
  discountSignature: 'NIigInzAudp5TBfGRSqrPQ75+tuhQhSc5KC9lodAy/0SeeMIN6YoHDBlv+S0hjjJ+CIm4X5hWaLF3V1QReTE1sznymTCVVVJL5rT2QWFLCMkUMJrPwBCt1xqdQWhU/uQSt0aXYFmWHXI4gCfEQr1AgAZaQPpcWGINhMK5T20+iPqWcCO/e1fX2/t8aQW7co3vkbAZC0iXHp71bihb6RsvJ6mxf5T/5cVg0yiE/KSTxP4nEf0GGz83Z9IYM9B/AKuejgljz4T0bvan8K/kQZDWwN00QjyzW3Llz9XufKiBnELRL8AW24Cbk1FrTNBmOiRxQApMgk8RWnzermCtTAoGA==',
};

const Organizing = (): ReactElement => (
  <>
    <TuitionDiscountPromo />
    <Form
      courseGroups={courseGroups}
      school="QC Design School"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qcdesignschool.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcdesignschool.com/enrollment-agreement-gb.html"
      successLink="https://www.qcdesignschool.com/welcome-to-the-school/"
      additionalOptions={additionalOptions}
    />
  </>
);

export default Organizing;
