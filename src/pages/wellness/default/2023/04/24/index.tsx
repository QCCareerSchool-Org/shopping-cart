import React, { FC } from 'react';

import { BuyOneGetOne } from '../../../../../../components/BuyOneGetOne';
import { Form } from '../../../../../../components/Form';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../Guarantee';
import { WellnessPromo20230424 } from './Promo';

export const Wellness20230424: FC = () => (
  <>
    <WellnessPromo20230424 />
    <Form
      courseGroups={courseGroups}
      school="QC Wellness Studies"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qcwellnessstudies.com/enrollment-agreement"
      agreementLinkGB="https://www.qcwellnessstudies.com/enrollment-agreement-gb"
      successLink="https://www.qcwellnessstudies.com/welcome-to-the-school/"
      promoCodeDefault="100OFF"
    />
  </>
);
