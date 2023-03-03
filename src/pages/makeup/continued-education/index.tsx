import React, { FC } from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { ContinuedEducationPromo } from './Promo';

export const MakeupContinuedEducation: FC = () => (
  <>
    <ContinuedEducationPromo />
    <Form
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
      student={true}
    />
  </>
);
