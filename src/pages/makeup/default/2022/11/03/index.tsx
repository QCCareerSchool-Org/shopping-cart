import React, { FC } from 'react';

import { Form } from '../../../../../../components/Form';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../Guarantee';
import { GlobalLuminousDynamicMessage } from './DynamicMessage';
import { MakeupPromo20221103 } from './Promo';

export const Makeup20221103: FC = () => (
  <>
    <MakeupPromo20221103 />
    <Form
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
      dynamicCourseDescriptions="REPLACE"
      paymentOptionsReverse={true}
      promoCodeDefault="FREEGLOBAL"
      dynamicCourseMessages={[ () => <GlobalLuminousDynamicMessage /> ]}
    />
  </>
);
