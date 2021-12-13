import React, { ReactElement } from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { Promo } from './promo';

const additionalOptions = {
  discount: {
    default: 150,
  },
  discountSignature: 'lhcJe/OXekVqOTZZxqWElh/z87EXo5bUtZ2yccymbQQHvTrx2jGgbovb+JwmTP/IDmXumCVErzGG7S9I0BAVAUQX63Vi2eqN9i+864aVWwEgE1B7HKDGqOjHo7NuKgyZMUSQcIjATi15p/n6yUaR/ir7zxCqlAVdXRL9SyWxDc0E5nOqAagnjw+6U+KlQtLtyHehwnftb5C9CCM/I1m84hboURsKUVuNixTpOK5avnTnQtTqT+LEVzHI1XSKG+CzIy9bdHCHFEb9Cup9kRmb7biHyZkh/rltK4a6sUc2aURbVEWYWTwJE381FlFFTIHY7KsP3vyy1c5D36Ap8yrwdQ==',
};

const Trainging150Off = (): ReactElement => (
  <>
    <Promo />
    <Form
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.doggroomingcourse.com/enrollment-agreement.html"
      agreementLinkGB="https://www.doggroomingcourse.com/enrollment-agreement-gb.html"
      successLink="https://www.doggroomingcourse.com/welcome-to-the-school/"
      additionalOptions={additionalOptions}
    />
  </>
);

export default Trainging150Off;
