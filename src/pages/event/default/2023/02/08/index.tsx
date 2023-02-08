import React, { FC } from 'react';

import { BuyOneGetOne } from '../../../../../../components/BuyOneGetOne';
import { Form } from '../../../../../../components/Form';
import { courseGroups } from '../../../../courseGroups';
import { FreeSpecialtyDynamicMessage } from '../../../../FreeSpecialtyDynamicMessage';
import { Guarantee } from '../../../../Guarantee';
import { EventPromo20230208 } from './Promo';

export const Event20230208: FC = () => (
  <>
    <EventPromo20230208 />
    <Form
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
      successLink="https://www.qceventplanning.com/welcome-to-the-school/"
      promoCodeDefault="SPECIALTY"
      dynamicCourseMessages={[ () => <FreeSpecialtyDynamicMessage /> ]}
    />
  </>
);
