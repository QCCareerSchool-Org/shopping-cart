import React, { FC } from 'react';

import { Form } from '../../../../../../components/Form';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../Guarantee';
import { TwoFreeSpecialtyDynamicMessage } from '../../../../TwoFreeSpecialtyDynamicMessage';
import { EventPromo20221013 } from './Promo';

export const Event20221013: FC = () => (
  <>
    <EventPromo20221013 />
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
