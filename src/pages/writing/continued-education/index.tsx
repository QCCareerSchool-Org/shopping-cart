import React, { FC } from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';

export const WritingContinuedEducation: FC = () => (
  <Form
    courseGroups={courseGroups}
    school="Winghill Writing School"
    guarantee={() => <Guarantee />}
    agreementLink="https://www.winghill.com/enrollment-agreement.html"
    agreementLinkGB="https://www.winghill.com/enrollment-agreement-gb.html"
    successLink="https://www.winghill.com/welcome-to-the-school/"
    student={true}
  />
);
