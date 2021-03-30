import React from 'react';

import { Guarantee } from '../Guarantee';
import { DefaultPromo } from '../default/DefaultPromo';
import { CourseGroup } from '../../../state/courses';
import { Form } from '../../../components/Form';
import { useDate } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const courseGroups: CourseGroup[] = [
  {
    name: 'Do Your Own Makeup',
    items: [
      { code: 'PA', name: 'Personal Makeup Techniques' },
    ],
  },
  {
    name: 'Professional Training',
    items: [
      { code: 'MZ', name: 'Master Makeup Artistry', badge: <img src={require('../../../most-pop.svg')} style={{ height: 32, marginTop: -4, marginLeft: 6 }} alt="Most Popular" /> },
      // { code: 'MK', name: 'Makeup Artistry' },
    ],
  },
  {
    name: 'Become a Skincare Consultant',
    items: [
      { code: 'SK', name: 'Skincare' },
    ],
  },
  {
    name: 'Advanced Courses',
    items: [
      { code: 'MW', name: 'Pro Makeup Workshop' },
      { code: 'GB', name: 'Global Beauty' },
      { code: 'PW', name: 'Portfolio Development Workshop' },
    ],
  },
  {
    name: 'Specialty Courses',
    items: [
      { code: 'AB', name: 'Airbrush Makeup Workshop' },
      { code: 'SF', name: 'Special FX Makeup' },
      { code: 'HS', name: 'Hair Styling Essentials' },
      { code: 'PF', name: 'Fashion Styling' },
      { code: 'VM', name: 'Virtual Makeup' },
    ],
  },
];

type Props = {
  currencyCode: string;
  courses: string[];
}

const Personal: React.FC<Props> = ({ currencyCode }) => {
  const serverDate = useDate();
  const date = dateOverride() || serverDate;

  return (
    <>
      <DefaultPromo date={date} currencyCode={currencyCode} />
      <Form
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={() => <Guarantee />}
        agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
        agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
        showPromoCodeInput={true}
        showDynamicCourseDescriptions={true}
      />
    </>
  );
};

export default Personal;
