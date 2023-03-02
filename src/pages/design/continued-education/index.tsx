import React, { FC } from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';

export const DesignContinuedEducation: FC = () => (
  <Form
    courseGroups={courseGroups}
    school="QC Design School"
    guarantee={() => <Guarantee />}
    agreementLink="https://www.qcdesignschool.com/enrollment-agreement.html"
    agreementLinkGB="https://www.qcdesignschool.com/enrollment-agreement-gb.html"
    successLink="https://www.qcdesignschool.com/welcome-to-the-school/"
    student={true}
  />
);
