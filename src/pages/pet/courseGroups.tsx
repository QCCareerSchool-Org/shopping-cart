import React from 'react';

import mostPopular from '../../kit-included-tag.svg';
import { CourseGroup } from '../../state/courses';

export const courseGroups: CourseGroup[] = [
  {
    items: [
      {
        code: 'DG',
        name: 'Dog Grooming',
        badge: <img src={mostPopular} style={{ position: 'absolute', height: 32, marginTop: -4, marginLeft: 6 }} alt="Most Popular" />,
      },
      { code: 'DT', name: 'Dog Training' },
      { code: 'DD', name: 'Dog Daycare' },
    ],
  },
];
