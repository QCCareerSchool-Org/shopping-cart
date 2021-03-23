import React from 'react';
import { Form } from '../../../components/Form';

import { courseGroups } from '../../makeup/courseGroups';
import { Guarantee } from '../../makeup/Guarantee';

const Makeup: React.FC = () => <Form
  courseGroups={courseGroups}
  school="QC Makeup Academy"
  guarantee={() => <Guarantee />}
  agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
  agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
  successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
  internal={true}
  allowOverrides={true}
  showPromoCodeInput={true}
/>;

export default Makeup;
