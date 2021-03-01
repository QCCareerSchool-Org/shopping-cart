import React, { useMemo } from 'react';

import { Guarantee } from '../Guarantee';
import { DefaultPromo } from '../default/DefaultPromo';
import { DynamicMessage } from '../default/DynamicMessage';
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

const Personal: React.FC<Props> = ({ currencyCode, courses }) => {
  const serverDate = useDate();
  const date = dateOverride() || serverDate;

  const dynamicCourseMessages = useMemo(() => {
    if (date >= new Date('2021-03-02T08:00:00-05:00')) {
      return [];
    } else {
      return [ () => <DynamicMessage courses={courses} /> ];
    }
  }, [ date, courses ]);

  const additionalOptions = useMemo(() => {
    if (date >= new Date('2021-03-02T08:00:00-05:00')) {
      return { deluxeKit: true };
    } else {
      return {};
    }
  }, [ date ]);

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
        dynamicCourseMessages={dynamicCourseMessages}
        additionalOptions={additionalOptions}
      />
    </>
  );
};

export default Personal;
