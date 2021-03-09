import React from 'react';
import { Form } from '../../../components/Form';

import { courseGroups } from '../../writing/courseGroups';
import { Guarantee } from '../../writing/Guarantee';

const Writing: React.FC = () => <Form
  courseGroups={courseGroups}
  school="Winghill Writing School"
  guarantee={() => <Guarantee />}
  agreementLink="https://www.winghill.com/enrollment-agreement.html"
  agreementLinkGB="https://www.winghill.com/enrollment-agreement-gb.html"
  successLink="https://www.winghill.com/welcome-to-the-school/"
  internal={true}
  allowOverrides={true}
/>;

export default Writing;
