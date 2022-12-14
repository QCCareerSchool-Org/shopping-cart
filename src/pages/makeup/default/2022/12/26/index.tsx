import React, { FC } from 'react';
import { BuyOneGetOne } from '../../../../../../components/BuyOneGetOne';

import { Form } from '../../../../../../components/Form';
import { courseGroups } from '../../../../courseGroups';
import { GlobalPlusLuminousDynamicMessage } from '../../../../GlobalPlusLuminousDynamicMessage';
import { Guarantee } from '../../../../Guarantee';
import { MakeupPromo20221226 } from './Promo';

export const Makeup20221226: FC = () => (
  <>
    <MakeupPromo20221226 />
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
      promoCodeDefault="GLOBALLUMINOUS"
      dynamicCourseMessages={[ () => <GlobalPlusLuminousDynamicMessage /> ]}
    />
  </>
);
