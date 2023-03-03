import React, { FC } from 'react';

import { Form } from '../../../components/Form';
import { CourseGroup } from '../../../state/courses';
import { Guarantee } from '../Guarantee';
import { ContinuedEducationPromo } from './Promo';

const courseGroups: CourseGroup[] = [
  {
    items: [
      { code: 'SL', name: 'Sleep Consultant' },
      { code: 'FC', name: 'Professional Caregiving' },
      { code: 'IC', name: 'Personal Caregiving' },
      { code: 'SK', name: 'Skincare' },
      { code: 'AP', name: 'Aging in Place' },
      { code: 'CC', name: 'Color Consultant' },
      { code: 'PO', name: 'Professional Organizing' },
    ],
  },
];

export const WellnessContinuedEducation: FC = () => (
  <>
    <ContinuedEducationPromo />
    <Form
      courseGroups={courseGroups}
      school="QC Wellness Studies"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcwellnessstudies.com/enrollment-agreement"
      agreementLinkGB="https://www.qcwellnessstudies.com/enrollment-agreement-gb"
      successLink="https://www.qcwellnessstudies.com/welcome-to-the-school/"
      student={true}
    />
  </>
);
