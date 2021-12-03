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

const additionalOptions50 = {
  discount: {
    default: 50,
  },
  discountSignature: 'IMAuLJd5/CAdMYA8xwD03ca3dSGR+Yi24+9QK5Rn6O44BwkPAojr6IMZMmFVt0yC24iI0N37R4gJj8+N9XTS1aywyFRYwVH4nNcil11xPNNhIygCkjXyGd+uE09LsLnYpEwt8Q0eS6LieMsyr7tDjUztKdI5AWd5dLNobMkAptrDeCALzvNbtg5NiGrD6Fv844Q4EEuXk8WOTpjqLqI86UKn4JECgGSntN8fwQXCEU0GqWXXxwUaWytDkMGi3KE+Ffm9fLx/ZVQSUHFWVbgcxlU0r2LVBVKeoBHnsrVxVEh6FZOfdHfj/SE1l3fs1ZsD9XDHH6EJGO0LVKW6VuBISA==',
};

const additionalOptions150 = {
  discount: {
    default: 150,
    GBP: 110,
  },
  discountSignature: 'AvAMLCgtdbQwwbAkqol+5Q3VmWC586ueTHX8nn1fDM7Yg3O/7GnzCWRsfkM68O5P2X9uZ8tuVnGb2BTB2Q+gQ2ZQySCjLi4z9y9bj4ptOlmt1cRJ1Ok1tKzMuPAXK97ZynNFQVdW+LBmcvL67b4236kWsD9gLErMHr3DxXJLact/GG7tVIRUUlTZNu583Md7MrM5VAlQeGsybXt/c63AeiBDSK84JHeyT3torFuhUKZUIzzt8ZHQwCknNBBKJJl1Z4Pwzy/TkRaZHoEzL++wjLn7K+l6KgH+NM3SrNVQSd3rc7q8hpfuPujg90SrV+z5sskUE9cudHDc2nvQcHvokg==',
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
        additionalOptions={additionalOptions}
      />
    </>
  );
};

export default Default;
