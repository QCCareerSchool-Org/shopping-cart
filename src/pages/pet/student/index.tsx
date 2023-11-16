import React, { type FC } from 'react';

import { DogGroomingKitTag } from '../../../components/DogGroomingKitTag';
import { Form } from '../../../components/Form';
import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';
import { CourseGroup } from '../../../state/courses';
import { FirstAidIncluded } from '../FirstAidIncluded';
import { Guarantee } from '../Guarantee';
import { Promo } from './Promo';

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

const Student: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;

  return (
    <>
      <Promo date={date} />
      <Form
        courseGroups={courseGroups}
        school="QC Pet Studies"
        guarantee={() => <Guarantee />}
        coursesSubtitle={() => <div className="mb-4" style={{ marginTop: '-0.75rem' }}><FirstAidIncluded /></div>}
        agreementLink="https://www.qcpetstudies.com/enrollment-agreement"
        agreementLinkGB="https://www.qcpetstudies.com/enrollment-agreement-gb"
        successLink="https://www.qcpetstudies.com/welcome-to-the-school"
        student
      />
    </>
  );
};

export default Student;
