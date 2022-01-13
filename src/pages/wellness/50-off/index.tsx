/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { Promo } from './promo';

type Props = {
  currencyCode: string;
};

const additionalOptions = {
  discount: {
    default: 50,
  },
  discountSignature: 'IMAuLJd5/CAdMYA8xwD03ca3dSGR+Yi24+9QK5Rn6O44BwkPAojr6IMZMmFVt0yC24iI0N37R4gJj8+N9XTS1aywyFRYwVH4nNcil11xPNNhIygCkjXyGd+uE09LsLnYpEwt8Q0eS6LieMsyr7tDjUztKdI5AWd5dLNobMkAptrDeCALzvNbtg5NiGrD6Fv844Q4EEuXk8WOTpjqLqI86UKn4JECgGSntN8fwQXCEU0GqWXXxwUaWytDkMGi3KE+Ffm9fLx/ZVQSUHFWVbgcxlU0r2LVBVKeoBHnsrVxVEh6FZOfdHfj/SE1l3fs1ZsD9XDHH6EJGO0LVKW6VuBISA==',
};

const Wellness50Off = ({ currencyCode }: Props): ReactElement => {
  return (
    <>
      <Promo />
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

export default Wellness50Off;
