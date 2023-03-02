import React, { FC } from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';

export const PetContinuedEducation: FC = () => (
  <Form
    courseGroups={courseGroups}
    school="QC Pet Studies"
    guarantee={() => <Guarantee />}
    agreementLink="https://www.qcpetstudies.com/enrollment-agreement"
    agreementLinkGB="https://www.qcpetstudies.com/enrollment-agreement-gb"
    successLink="https://www.qcpetstudies.com/welcome-to-the-school"
    student={true}
  />
);
