import React, { FC } from 'react';

import { Form } from '../../../../../../components/Form';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../Guarantee';
import { TwoFreeSpecialtyDynamicMessage } from '../../../../TwoFreeSpecialtyDynamicMessage';
import { EventPromo20231127 } from './Promo';

export const Event20231127: FC = () => (
  <>
    <EventPromo20231127 />
    <Form
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
      successLink="https://www.qceventplanning.com/welcome-to-the-school/"
      promoCodeDefault="2SPECIALTY"
      dynamicCourseMessages={[ () => <TwoFreeSpecialtyDynamicMessage /> ]}
    />
  </>
);
