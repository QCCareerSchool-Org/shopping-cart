import React, { FC } from 'react';

import { Form } from '../../../../../../components/Form';
import { courseGroups } from '../../../../courseGroups';
import { FreeSpecialtyDynamicMessage } from '../../../../FreeSpecialtyDynamicMessage';
import { Guarantee } from '../../../../Guarantee';
import { EventPromo20231009 } from './Promo';

export const Event20231009: FC = () => (
  <>
    <EventPromo20231009 />
    <Form
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
      successLink="https://www.qceventplanning.com/welcome-to-the-school/"
      promoCodeDefault="2SPECIALTY"
      dynamicCourseMessages={[ () => <FreeSpecialtyDynamicMessage /> ]}
    />
  </>
);
