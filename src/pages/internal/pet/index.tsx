import React from 'react';

import { Form } from '../../../components/Form';
import { CourseGroup } from '../../../state/courses';
import { Guarantee } from '../../pet/Guarantee';

const courseGroups: CourseGroup[] = [
  {
    items: [
      { code: 'DG', name: 'Dog Grooming' },
      { code: 'DT', name: 'Dog Training' },
      { code: 'DD', name: 'Dog Daycare' },
      { code: 'FA', name: 'First Aid for Groomers' },
      { code: 'DC', name: 'Dog Behavior' },
    ],
  },
];

const Pet: React.FC = () => <Form
  courseGroups={courseGroups}
  school="QC Pet Studies"
  guarantee={() => <Guarantee />}
  agreementLink="https://www.qcpetstudies.com/enrollment-agreement"
  agreementLinkGB="https://www.qcpetstudies.com/enrollment-agreement-gb"
  successLink="https://www.qcpetstudies.com/welcome-to-the-school"
  visualPaymentPlans={false}
  internal={true}
  allowOverrides={true}
  showPromoCodeInput={true}
/>;

export default Pet;
