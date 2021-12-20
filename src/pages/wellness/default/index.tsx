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

const additionalOptions = {
  discount: {
    default: 100,
    GBP: 75,
  },
  discountSignature: 'ZEWLbuphTH4oLBZyyu4/iuASSVgRnykmXjeZOMNbgOl75TYgW9YaO7NyaYkqfcHYVFv2kTAwxZ+PPUxxx2tnsq+LysBHqhSoslgY+JVDO5ETDymqhcMo9IIuwTGlZ8Cwxu2BScM3RBMQ1f30jXYis1wwXmcaYv5urpM9jQ794gVLlBIsrDYoHDe3BO0IUaOk1a2JtMyLntprcde1rXf9GkDsUujWqTuSDyKKNqwiqnRksGNu3LWA9swEdL8mP6SoPKJyv8NkWHZVsseWRzqS/W9rYS6FiJx6+PiiL61pU2Zj1Ai1l5NkrEvxaKBOjkYmWG1gOjgMsf3DcciXmPTdhQ==',
};

const additionalOptions15075 = {
  discount: {
    default: 150,
    GBP: 75,
  },
  discountSignature: 'jIs66Hj5SMDVik1zdRAeLxZHz51YUfDOTlQXNzIWo4Rh/UyLIRu9ULTTAh/UUFAXT7uopkyDbY6+Ze5zG4gpp7GHey10pj5mG6xptAxUAqZ4mzGtTt1Ejg0W/YgT5J/5dupIdPfBgIKNaGFFO/olMx+h5RceBNuTTRYag6yd7gBuvIJ/YPsUSwghkjGKTAidQqs0M4p5AnEz9qOZdfrhcltO2mkRoNWSkAxFnZpcTLj0K6ANtEDvrtA4wRcT65ANsAQAfGLCJJe59pRI8gvw21QikclQzbQ9aXh4nFADooiaw8SmfE0NnczbiOpS6fleW9xZCd7Qmh5KUbfzK6IX1Q==  ',
};

const Default: React.FC<Props> = ({ currencyCode }) => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;

  return (
    <>
      <DefaultPromo date={date} />
      <Form
        courseGroups={courseGroups}
        school="QC Wellness Studies"
        guarantee={() => <Guarantee />}
        agreementLink="https://www.qcwellnessstudies.com/enrollment-agreement"
        agreementLinkGB="https://www.qcwellnessstudies.com/enrollment-agreement-gb"
        successLink="https://www.qcwellnessstudies.com/welcome-to-the-school/"
        additionalOptions={additionalOptions15075}
      />
    </>
  );
};

export default Default;
