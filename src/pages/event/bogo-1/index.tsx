import React, { memo, ReactElement } from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { EventFreeCourseDynamicMessage } from '../EventFreeCourseDynamicMessage';
import { Guarantee } from '../Guarantee';
import { Bogo1Promo } from './Bogo1Promo';

const Bogo1 = memo((): ReactElement => (
  <>
    <Bogo1Promo />
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

Bogo1.displayName = 'Bogo1';

export default Bogo1;
