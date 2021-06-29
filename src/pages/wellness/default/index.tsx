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

const additionalOptions154 = {
  discount: {
    default: 154,
  },
  discountSignature: 'ql/9GgT5jefYWtGi9Pnf1y6syj2D73EfyKjC75OuUD33fod6vj4g58lZydXcSFfKhv3E107cd16aBQtKkHxL+PT232js65fQESEtiNFI+MABd0Ta6vWwHpOEtB7GdHtc+XnFKaoNebcV+N3oJwT67xhkN+STee9Lzrfr8Yt+1T8SPQRlFUlnFB7U18sv7xA2cWQZkKIqjhhYFPwgN0dyB6SAZbuSBqQkagX0Jr+RZU1PDrLNYOGoR875fq2TeUEZqCPmoD2v2WKRAOGmvxBHbHJDJE770xB14sy39IVWlJalnVgqwGwb7PkTkb4lxa/gNhPEpdiH7ARBgnxNk6+ftw==',
};

const Default: React.FC<Props> = ({ currencyCode }) => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;

  return (
    <>
      <DefaultPromo date={date} currencyCode={currencyCode} />
      <Form
        courseGroups={courseGroups}
        school="QC Wellness Studies"
        guarantee={() => <Guarantee />}
        agreementLink="https://www.qcwellnessstudies.com/enrollment-agreement"
        agreementLinkGB="https://www.qcwellnessstudies.com/enrollment-agreement-gb"
        successLink="https://www.qcwellnessstudies.com/welcome-to-the-school/"
        additionalOptions={additionalOptions154}
      />
    </>
  );
};

export default Default;
