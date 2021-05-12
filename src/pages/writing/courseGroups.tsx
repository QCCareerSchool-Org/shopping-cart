import React from 'react';

import { CourseGroup } from '../../state/courses';

export const courseGroups: CourseGroup[] = [
  {
    items: [
      { code: 'WS', name: 'Creative Writing', badge: <img src={require('../../most-pop.svg').default} style={{ height: 32, marginTop: -4, marginLeft: 6 }} alt="Most Popular" /> },
      { code: 'NV', name: 'Novel Writing' },
      { code: 'RM', name: 'Romance Writing' },
      { code: 'CH', name: 'Writing For Children' },
      { code: 'BC', name: 'Business Communications' },
      { code: 'FH', name: 'Memoir Writing' },
      { code: 'SC', name: 'Screenwriting' },
    ],
  },
];
