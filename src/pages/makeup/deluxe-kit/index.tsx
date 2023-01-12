import React from 'react';

import { BuyOneGetOne } from '../../../components/BuyOneGetOne';
import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DeluxeKitPromo } from './DeluxeKitPromo';

const deluxeKitOptions = { deluxeKit: true };

const DeluxeKit: React.FC = () => (
  <>
    <DeluxeKitPromo />
    <Form
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
      dynamicCourseDescriptions="REPLACE"
      additionalOptions={deluxeKitOptions}
      paymentOptionsReverse={true}
    />
  </>
);

export default DeluxeKit;
