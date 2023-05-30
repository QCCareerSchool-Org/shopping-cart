import React from 'react';
import { Form } from '../../../components/Form';

import { courseGroups } from '../../makeup/courseGroups';
import { Guarantee } from '../../makeup/Guarantee';

const modifiedCourseGroups = [
  ...courseGroups,
  {
    name: 'Personal Makeup',
    items: [ { code: 'PA', name: 'Personal Makeup' } ],
  },
];

const Makeup: React.FC = () => <Form
  courseGroups={modifiedCourseGroups}
  school="QC Makeup Academy"
  guarantee={() => <Guarantee />}
  agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
  agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
  successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
  visualPaymentPlans={false}
  internal={true}
  allowOverrides={true}
  showPromoCodeInput={true}
/>;

export default Makeup;
