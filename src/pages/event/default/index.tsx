/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Form } from '../../../components/Form';
import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from './DefaultPromo';
import { DynamicMessage } from './DynamicMessage';

type Props = {
  courses: string[];
  currencyCode: string;
};

const additionalOptionsNone = {};
const additionalOptionsDiscount = {
  discount: {
    default: 50,
  },
  discountSignature: 'IMAuLJd5/CAdMYA8xwD03ca3dSGR+Yi24+9QK5Rn6O44BwkPAojr6IMZMmFVt0yC24iI0N37R4gJj8+N9XTS1aywyFRYwVH4nNcil11xPNNhIygCkjXyGd+uE09LsLnYpEwt8Q0eS6LieMsyr7tDjUztKdI5AWd5dLNobMkAptrDeCALzvNbtg5NiGrD6Fv844Q4EEuXk8WOTpjqLqI86UKn4JECgGSntN8fwQXCEU0GqWXXxwUaWytDkMGi3KE+Ffm9fLx/ZVQSUHFWVbgcxlU0r2LVBVKeoBHnsrVxVEh6FZOfdHfj/SE1l3fs1ZsD9XDHH6EJGO0LVKW6VuBISA==',
};

const Default: React.FC<Props> = ({ courses, currencyCode }) => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;

  return (
    <>
      <DefaultPromo date={date} currencyCode={currencyCode} />
      <Form
        courseGroups={courseGroups}
        school="QC Event School"
        guarantee={() => <Guarantee />}
        shippingOption={true}
        agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
        agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
        successLink="https://www.qceventplanning.com/welcome-to-the-school/"
        dynamicCourseMessages={[ () => <DynamicMessage date={date} courses={courses} /> ]}
        showPromoCodeInput={date.getTime() >= Date.UTC(2021, 5, 9, 13)}
        additionalOptions={date.getTime() < Date.UTC(2021, 4, 10, 4) ? additionalOptionsDiscount : additionalOptionsNone}
      />
    </>
  );
};

export default Default;
