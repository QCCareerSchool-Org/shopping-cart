import React, { FC } from 'react';

import { Form } from '../../../../../../components/Form';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../Guarantee';
import { WellnessPromo20221103 } from './Promo';

export const Wellness20221103: FC = () => (
  <>
    <WellnessPromo20221103 />
    <Form
      courseGroups={courseGroups}
      school="QC Wellness Studies"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcwellnessstudies.com/enrollment-agreement"
      agreementLinkGB="https://www.qcwellnessstudies.com/enrollment-agreement-gb"
      successLink="https://www.qcwellnessstudies.com/welcome-to-the-school/"
      promoCodeDefault="50OFF"
    />
  </>
);
