import React from 'react';

import { Form } from '../../../components/Form';
import { CourseGroup } from '../../../state/courses';
import { Guarantee } from '../../pet/Guarantee';

const courseGroups: CourseGroup[] = [
  {
    items: [
      { code: 'DG', name: 'Dog Grooming' },
      { code: 'DT', name: 'Dog Training' },
      { code: 'FA', name: 'First Aid for Groomers' },
      { code: 'DS', name: 'Breed Styling' },
    ],
  },
];

const Pet: React.FC = () => <Form
  courseGroups={courseGroups}
  school="QC Pet Studies"
  guarantee={() => <Guarantee />}
  agreementLink="https://www.doggroomingcourse.com/enrollment-agreement.html"
  agreementLinkGB="https://www.doggroomingcourse.com/enrollment-agreement-gb.html"
  successLink="https://www.doggroomingcourse.com/welcome-to-the-school/"
  internal={true}
  allowOverrides={true}
  showPromoCodeInput={true}
/>;

export default Pet;
