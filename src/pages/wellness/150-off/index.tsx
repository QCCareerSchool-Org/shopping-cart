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
    default: 150,
  },
  discountSignature: 'lhcJe/OXekVqOTZZxqWElh/z87EXo5bUtZ2yccymbQQHvTrx2jGgbovb+JwmTP/IDmXumCVErzGG7S9I0BAVAUQX63Vi2eqN9i+864aVWwEgE1B7HKDGqOjHo7NuKgyZMUSQcIjATi15p/n6yUaR/ir7zxCqlAVdXRL9SyWxDc0E5nOqAagnjw+6U+KlQtLtyHehwnftb5C9CCM/I1m84hboURsKUVuNixTpOK5avnTnQtTqT+LEVzHI1XSKG+CzIy9bdHCHFEb9Cup9kRmb7biHyZkh/rltK4a6sUc2aURbVEWYWTwJE381FlFFTIHY7KsP3vyy1c5D36Ap8yrwdQ==',
};

const Wellness150Off = ({ currencyCode }: Props): ReactElement => {
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

export default Wellness150Off;