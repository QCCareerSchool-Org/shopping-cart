import React from 'react';
import { Form } from '../../../components/Form';

import { courseGroups } from '../../design/courseGroups';
import { Guarantee } from '../../design/Guarantee';

const Design: React.FC = () => <Form
  courseGroups={courseGroups}
  school="QC Design School"
  guarantee={() => <Guarantee />}
  agreementLink="https://www.qcdesignschool.com/enrollment-agreement.html"
  agreementLinkGB="https://www.qcdesignschool.com/enrollment-agreement-gb.html"
  successLink="https://www.qcdesignschool.com/welcome-to-the-school/"
  internal={true}
  allowOverrides={true}
/>;

export default Design;
