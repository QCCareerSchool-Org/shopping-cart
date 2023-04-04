import React, { memo, ReactElement } from 'react';

import { BuyOneGetOne } from '../../../components/BuyOneGetOne';
import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { EventFreeCourseDynamicMessage } from '../EventFreeCourseDynamicMessage';
import { Guarantee } from '../Guarantee';
import { Bogo2Promo } from './Bogo2Promo';

const Bogo2 = memo((): ReactElement => (
  <>
    <Bogo2Promo />
    <Form
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
      successLink="https://www.qceventplanning.com/welcome-to-the-school/"
      dynamicCourseMessages={[ () => <EventFreeCourseDynamicMessage /> ]}
      promoCodeDefault="EVENTFREECOURSE"
    />
  </>
));

Bogo2.displayName = 'Bogo2';

export default Bogo2;
