/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';
import { Form } from '../../../components/Form';

import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { LuminousDynamicMessage } from './LuminousDynamicMessage';
import { LuminousPromo } from './LuminousPromo';

const LuminousKit = (): ReactElement => (
  <>
    <LuminousPromo />
    <Form
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
      dynamicCourseMessages={[ () => <LuminousDynamicMessage /> ]}
      promoCodeDefault="LUMINOUS"
      paymentOptionsReverse={true}
    />
  </>
);

export default LuminousKit;
