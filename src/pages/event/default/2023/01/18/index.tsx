import React, { FC } from 'react';

import { BuyOneGetOne } from '../../../../../../components/BuyOneGetOne';
import { Form } from '../../../../../../components/Form';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../Guarantee';
import { TwoFreeSpecialtyDynamicMessage } from '../../../../TwoFreeSpecialtyDynamicMessage';
import { EventPromo20230118 } from './Promo';

export const Event20230118: FC = () => (
  <>
    <EventPromo20230118 />
    <Form
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
      successLink="https://www.qceventplanning.com/welcome-to-the-school/"
      promoCodeDefault="2SPECIALTY"
      dynamicCourseMessages={[ () => <TwoFreeSpecialtyDynamicMessage /> ]}
    />
  </>
);
