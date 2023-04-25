import React from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { Promo } from './Promo';

const Student: React.FC = () => (
  <>
    <Promo />
    <Form
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={() => <Guarantee />}
      student={true}
      agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
      dynamicCourseDescriptions="REPLACE"
      showPromoCodeInput={true}
    />
  </>
);

export default Student;
