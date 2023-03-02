import React, { FC } from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';

export const WellnessContinuedEducation: FC = () => (
  <Form
    courseGroups={courseGroups}
    school="QC Wellness Studies"
    guarantee={() => <Guarantee />}
    agreementLink="https://www.qcwellnessstudies.com/enrollment-agreement"
    agreementLinkGB="https://www.qcwellnessstudies.com/enrollment-agreement-gb"
    successLink="https://www.qcwellnessstudies.com/welcome-to-the-school/"
    student={true}
  />
);
