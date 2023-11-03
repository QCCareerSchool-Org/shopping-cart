import React, { FC } from 'react';
import { BogoDynamicMessage } from '../../../../../../components/BogoDynamicMessage';

import { Form } from '../../../../../../components/Form';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../Guarantee';
import { SkincarePlusLuminousDynamicMessage } from '../../../../SkincarePlusLuminousDynamicMessage';
import { MakeupPromo20231106 } from './Promo';

export const Makeup20231106: FC = () => (
  <>
    <MakeupPromo20231106 />
    <Form
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
      dynamicCourseDescriptions="REPLACE"
      promoCodeDefault="SKINCARE"
      dynamicCourseMessages={[ () => <SkincarePlusLuminousDynamicMessage />, () => <BogoDynamicMessage /> ]}
      visualPaymentPlans={true}
      paymentOptionsReverse={true}
    />
  </>
);
