import React, { FC } from 'react';
import { BuyOneGetOne } from '../../../../../../components/BuyOneGetOne';

import { Form } from '../../../../../../components/Form';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../Guarantee';
import { ProPlusLuminousDynamicMessage } from '../../../../ProPlusLuminousDynamicMessage';
import { MakeupPromo20230118 } from './Promo';

export const Makeup20230118: FC = () => (
  <>
    <MakeupPromo20230118 />
    <Form
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
      showDynamicCourseDescriptions={true}
      paymentOptionsReverse={true}
      promoCodeDefault="PROLUMINOUS"
      dynamicCourseMessages={[ () => <ProPlusLuminousDynamicMessage /> ]}
    />
  </>
);
