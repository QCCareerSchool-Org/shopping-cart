import React from 'react';

import { CourseGroup } from '../../components/CourseSelection';

import mostPopular from '../../most-pop.svg';
import specialOffer from './special-offer.svg';

export const courseGroups: CourseGroup[] = [
  {
    name: 'Foundational Courses',
    items: [
      {
        code: 'MZ',
        name: 'Master Makeup Artistry',
        description: 'Become a Professional',
        badge: <img src={mostPopular} style={{ height: 32, marginTop: -4, marginLeft: 6 }} alt="Most Popular" />,
      },
      {
        code: 'MK',
        name: 'Makeup Artistry',
        description: 'Learn to Do Your Own Makeup',
      },
      {
        code: 'SK',
        name: 'Skincare',
        description: 'Become a Skincare Consultant',

      },
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
  {
    name: 'Advanced Courses',
    items: [
      {
        code: 'MW',
        name: 'Pro Makeup Workshop',
        // badge: <img src={specialOffer} style={{ height: 32, marginTop: -4, marginLeft: 6 }} alt="Sepcial Offer" />,
      },
      { code: 'GB', name: 'Global Beauty' },
      { code: 'PW', name: 'Portfolio Development Workshop' },
    ],
  },
];
