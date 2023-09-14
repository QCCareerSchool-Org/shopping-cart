/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import mostPopular from '../../most-pop.svg';
import { CourseGroup } from '../../state/courses';

export const courseGroups: CourseGroup[] = [
  {
    name: 'Foundation Courses',
    items: [
      {
        code: 'MZ',
        name: 'Master Makeup Artistry',
        badge: <img src={mostPopular} style={{ height: 32, marginTop: -4, marginLeft: 6 }} alt="Most Popular" />,
      },
      {
        code: 'SK',
        name: 'Skincare Consultant',
      },
    ],
  },
  {
    name: 'Specialty Courses',
    items: [
      { code: 'SF', name: 'Special FX Makeup' },
      { code: 'MW', name: 'Pro Makeup Workshop' },
      { code: 'HS', name: 'Hair Styling Essentials' },
      { code: 'AB', name: 'Airbrush Makeup Workshop' },
    ],
  },
];
