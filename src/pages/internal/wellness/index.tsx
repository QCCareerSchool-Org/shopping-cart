import React from 'react';
import { Form } from '../../../components/Form';

import { courseGroups } from '../../wellness/courseGroups';
import { Guarantee } from '../../wellness/Guarantee';

const Wellness: React.FC = () => <Form
  courseGroups={courseGroups}
  school="QC Wellness Studies"
  guarantee={() => <Guarantee />}
  agreementLink="https://www.qcwellnessstudies.com/enrollment-agreement"
  agreementLinkGB="https://www.qcwellnessstudies.com/enrollment-agreement-gb"
  successLink="https://www.qcwellnessstudies.com/welcome-to-the-school/"
  visualPaymentPlans={false}
  internal={true}
  allowOverrides={true}
  showPromoCodeInput={true}
/>;

export default Wellness;
