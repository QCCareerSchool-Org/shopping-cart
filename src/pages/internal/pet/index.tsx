import React from 'react';
import { Form } from '../../../components/Form';

import { courseGroups } from '../../pet/courseGroups';
import { Guarantee } from '../../pet/Guarantee';

const Pet: React.FC = () => <Form
  courseGroups={courseGroups}
  school="QC Pet Studies"
  guarantee={() => <Guarantee />}
  shippingOption={true}
  agreementLink="https://www.doggroomingcourse.com/enrollment-agreement.html"
  agreementLinkGB="https://www.doggroomingcourse.com/enrollment-agreement-gb.html"
  successLink="https://www.doggroomingcourse.com/welcome-to-the-school/"
  internal={true}
  allowOverrides={true}
/>;

export default Pet;
