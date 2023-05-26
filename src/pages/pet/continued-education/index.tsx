import React, { FC } from 'react';

import { DogGroomingKitTag } from '../../../components/DogGroomingKitTag';
import { Form } from '../../../components/Form';
import { CourseGroup } from '../../../state/courses';
import { Guarantee } from '../Guarantee';
import { ContinuedEducationPromo } from './Promo';

const courseGroups: CourseGroup[] = [
  {
    items: [
      { code: 'DG', name: 'Dog Grooming', badge: <DogGroomingKitTag /> },
      { code: 'DT', name: 'Dog Training' },
      { code: 'DD', name: 'Dog Daycare' },
      { code: 'DC', name: 'Dog Behavior' },
    ],
  },
];

export const PetContinuedEducation: FC = () => (
  <>
    <ContinuedEducationPromo />
    <Form
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcpetstudies.com/enrollment-agreement"
      agreementLinkGB="https://www.qcpetstudies.com/enrollment-agreement-gb"
      successLink="https://www.qcpetstudies.com/welcome-to-the-school"
      student={true}
    />
  </>
);
