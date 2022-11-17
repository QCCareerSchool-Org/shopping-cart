/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';

import { BuyOneGetOne } from '../../../components/BuyOneGetOne';
import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { FreeSkincareDynamicMessage } from './FreeSkincareDynamicMessage';
import { FreeSkinCarePromo } from './FreeSkincarePromo';

const FreeSkincare = (): ReactElement => (
  <>
    <FreeSkinCarePromo />
    <Form
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
      promoCodeDefault="SKINCARE"
      dynamicCourseMessages={[ () => <FreeSkincareDynamicMessage /> ]}
      paymentOptionsReverse={true}
    />
  </>
);

export default FreeSkincare;
