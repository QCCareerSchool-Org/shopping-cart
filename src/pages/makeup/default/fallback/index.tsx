import React, { FC } from 'react';
import { BogoDynamicMessage } from '../../../../components/BogoDynamicMessage';
import { BuyOneGetOne } from '../../../../components/BuyOneGetOne';

import { Form } from '../../../../components/Form';
import { courseGroups } from '../../courseGroups';
import { Guarantee } from '../../Guarantee';
import { MakeupFallbackPromo } from './Promo';

export const MakeupFallback: FC = () => (
  <>
    <MakeupFallbackPromo />
    <Form
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      coursesSubtitle={() => <BuyOneGetOne />}
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
      dynamicCourseDescriptions="REPLACE"
      paymentOptionsReverse={true}
      dynamicCourseMessages={[ () => <BogoDynamicMessage /> ]}
    />
  </>
);
