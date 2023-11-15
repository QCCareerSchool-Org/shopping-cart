import React, { FC } from 'react';
import { BogoDynamicMessage } from '../../../../../../components/BogoDynamicMessage';

import { Form } from '../../../../../../components/Form';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../Guarantee';
import { ProPlusLuminousDynamicMessage } from '../../../../ProPlusLuminousDynamicMessage';
import { MakeupPromo20231127 } from './Promo';

export const Makeup20231127: FC = () => (
  <>
    <MakeupPromo20231127 />
    <Form
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
      dynamicCourseDescriptions="REPLACE"
      promoCodeDefault="PROLUMINOUS"
      dynamicCourseMessages={[ () => <ProPlusLuminousDynamicMessage />, () => <BogoDynamicMessage /> ]}
      visualPaymentPlans={true}
      paymentOptionsReverse={true}
    />
  </>
);
