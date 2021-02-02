import React from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';

const Student: React.FC = () => (
  <Form
    courseGroups={courseGroups}
    school="QC Makeup Academy"
    guarantee={() => <Guarantee />}
    student={true}
    agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
    agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
    successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
  />
);

export default Student;
