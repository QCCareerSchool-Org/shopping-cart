import React, { FC } from 'react';
import { BogoDynamicMessage } from '../../../../../../components/BogoDynamicMessage';

import { Form } from '../../../../../../components/Form';
import { courseGroups } from '../../../../courseGroups';
import { GlobalPlusLuminousDynamicMessage } from '../../../../GlobalPlusLuminousDynamicMessage';
import { Guarantee } from '../../../../Guarantee';
import { MakeupPromo20230505 } from './Promo';

export const Makeup20230505: FC = () => (
  <>
    <MakeupPromo20230505 />
    <Form
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
      dynamicCourseDescriptions="REPLACE"
      promoCodeDefault="FREEGLOBAL"
      dynamicCourseMessages={[ () => <GlobalPlusLuminousDynamicMessage />, () => <BogoDynamicMessage /> ]}
      visualPaymentPlans={true}
    />
  </>
);
