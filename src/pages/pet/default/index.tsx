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

const additionalOptions300 = {
  discount: {
    default: 300,
    GBP: 220,
  },
  discountSignature: 'p66T6XjMVaWzlGIjid+xQsox+4EIfV6KCpjOFetzIS54x473ezHnsIzELsbS2HW2XNTQh/u7BufGzwxH6S6VNTf1+/ZC6CwdOGegyUO4oyd7MJ347UfTVnI+RAuV3ijbs2Yk60L/AiJzGTICg6Bn6KojMxJQma0GEtuDGr+hF1CzBPkAg8/wk912UBqOkSXc2uShaWW3DnameZZKyiJB3dG0az6iiBL3f0ning12eHT78QSbvJnbL/wpye3KA8ehU0G6x+z2/oulVEZx2LV4179DttUXVoVnGlvsc/2yr/KAA9S2s6gtpjZ4Z1w3yPUG0cLW7FQ08eTBWEBzPPzIbA==',
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
        additionalOptions={additionalOptions200}
      />
    </>
  );
};

export default Default;
