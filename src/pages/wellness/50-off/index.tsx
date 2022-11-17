import React, { FC } from 'react';
import { BuyOneGetOne } from '../../../components/BuyOneGetOne';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { Promo } from './promo';

const Wellness50Off: FC = () => (
  <>
    <Promo />
    <Form
      courseGroups={courseGroups}
      school="QC Wellness Studies"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qcwellnessstudies.com/enrollment-agreement"
      agreementLinkGB="https://www.qcwellnessstudies.com/enrollment-agreement-gb"
      successLink="https://www.qcwellnessstudies.com/welcome-to-the-school/"
      promoCodeDefault="50OFF"
    />
  </>
);

export default Wellness50Off;
