import React from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DeluxeKitPromo } from './DeluxeKitPromo';

const DeluxeKit: React.FC = () => (
  <>
    <DeluxeKitPromo />
    <Form
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
      showDynamicCourseDescriptions={true}
      additionalOptions={{ deluxeKit: true }}
    />
  </>
);

export default DeluxeKit;
