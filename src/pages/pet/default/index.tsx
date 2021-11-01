/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Form } from '../../../components/Form';
import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from './DefaultPromo';

type Props = {
  currencyCode: string;
};

const additionalOptionsDiscount = {
  discount: {
    default: 100,
    GBP: 75,
  },
  discountSignature: 'ZEWLbuphTH4oLBZyyu4/iuASSVgRnykmXjeZOMNbgOl75TYgW9YaO7NyaYkqfcHYVFv2kTAwxZ+PPUxxx2tnsq+LysBHqhSoslgY+JVDO5ETDymqhcMo9IIuwTGlZ8Cwxu2BScM3RBMQ1f30jXYis1wwXmcaYv5urpM9jQ794gVLlBIsrDYoHDe3BO0IUaOk1a2JtMyLntprcde1rXf9GkDsUujWqTuSDyKKNqwiqnRksGNu3LWA9swEdL8mP6SoPKJyv8NkWHZVsseWRzqS/W9rYS6FiJx6+PiiL61pU2Zj1Ai1l5NkrEvxaKBOjkYmWG1gOjgMsf3DcciXmPTdhQ==',
};

const additionalOptions200 = {
  discount: {
    default: 200,
    GBP: 150,
  },
  discountSignature: 'NIigInzAudp5TBfGRSqrPQ75+tuhQhSc5KC9lodAy/0SeeMIN6YoHDBlv+S0hjjJ+CIm4X5hWaLF3V1QReTE1sznymTCVVVJL5rT2QWFLCMkUMJrPwBCt1xqdQWhU/uQSt0aXYFmWHXI4gCfEQr1AgAZaQPpcWGINhMK5T20+iPqWcCO/e1fX2/t8aQW7co3vkbAZC0iXHp71bihb6RsvJ6mxf5T/5cVg0yiE/KSTxP4nEf0GGz83Z9IYM9B/AKuejgljz4T0bvan8K/kQZDWwN00QjyzW3Llz9XufKiBnELRL8AW24Cbk1FrTNBmOiRxQApMgk8RWnzermCtTAoGA==',
};

const additionalOptions150 = {
  discount: {
    default: 150,
    GBP: 100,
  },
  discountSignature: 'FwFSVuWaQh0KYtrK8lZNUzY/BKHlL1VrpNgUnZbE7nIjx5gjZRRqkd556fxpx0Orjs66tACl6ru3A+JkWnv9SisNqNhBa6q36IzLtifUvVMT85MQBB4NbK43ofTCibWVdIN2iMB475bp3UxatIarFTolBWxupBXtEBACZtEBXRO5dSDc5nwsNw8n8YBhJYQPXMyRXKrKeJVUwRxXnjezBi0sTDrhp83g48MclkwCOD9blsVjJ5YNiYZJUYgEmw7Caj3o8Tzj+QQvw4XEa12vidYMfZVrENYfZAZaUWIEgQ4AqGSQ6iscbmnCZbFmCFM2g4NSFo3f6e5PSsj6e0aLcA==',
};

const Default: React.FC<Props> = ({ currencyCode }) => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;

  return (
    <>
      <DefaultPromo date={date} />
      <Form
        courseGroups={courseGroups}
        school="QC Pet Studies"
        guarantee={() => <Guarantee />}
        agreementLink="https://www.doggroomingcourse.com/enrollment-agreement.html"
        agreementLinkGB="https://www.doggroomingcourse.com/enrollment-agreement-gb.html"
        successLink="https://www.doggroomingcourse.com/welcome-to-the-school/"
        additionalOptions={additionalOptions150}
      />
    </>
  );
};

export default Default;
