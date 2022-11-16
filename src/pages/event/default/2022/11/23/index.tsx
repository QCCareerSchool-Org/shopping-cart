import React, { FC } from 'react';

import { Form } from '../../../../../../components/Form';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../Guarantee';
import { TwoFreeSpecialtyDynamicMessage } from '../../../../TwoFreeSpecialtyDynamicMessage';
import { EventPromo20221123 } from './Promo';

export const Event20221123: FC = () => (
  <>
    <EventPromo20221123 />
    <Form
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
      successLink="https://www.qceventplanning.com/welcome-to-the-school/"
      dynamicCourseMessages={[ () => <TwoFreeSpecialtyDynamicMessage /> ]}
      promoCodeDefault="2SPECIALTY"
    />
  </>
);
