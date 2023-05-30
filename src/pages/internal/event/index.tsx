import React from 'react';
import { Form } from '../../../components/Form';

import { courseGroups } from '../../event/courseGroups';
import { Guarantee } from '../../event/Guarantee';

const Event: React.FC = () => <Form
  courseGroups={courseGroups}
  school="QC Event School"
  guarantee={() => <Guarantee />}
  agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
  agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
  successLink="https://www.qceventplanning.com/welcome-to-the-school/"
  visualPaymentPlans={false}
  internal={true}
  allowOverrides={true}
  showPromoCodeInput={true}
/>;

export default Event;
