import React from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';

const additionalOptions = {
  studentDiscount: true,
};

const Student: React.FC = () => (
  <Form
    courseGroups={courseGroups}
    school="QC Design School"
    guarantee={() => <Guarantee />}
    agreementLink="https://www.qcdesignschool.com/enrollment-agreement.html"
    agreementLinkGB="https://www.qcdesignschool.com/enrollment-agreement-gb.html"
    successLink="https://www.qcdesignschool.com/welcome-to-the-school/"
    student={true}
    additionalOptions={additionalOptions}
  />
);

export default Student;
