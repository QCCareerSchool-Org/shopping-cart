import React from 'react';

import { CSSProperties } from 'styled-components';
import { School } from '../../../lib/enrollment';
import { DetailsPopup } from './DetailsPopup';

type Image = {
  src?: any;
  backgroundColor?: CSSProperties['backgroundColor'];
  color?: CSSProperties['color'];
  borderColor?: CSSProperties['borderColor'];
  buttonVariant?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'black';
};

type ScreenSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Images = {
  full: Image;
  part: Image;
  height: Record<ScreenSizes, number | undefined>;
  buttonOffset: Record<ScreenSizes, number | undefined>;
};

export type CourseKit = {
  courseCode: string | string[];
  images?: Images;
  fullBullets: Array<string | JSX.Element>;
  partBullets: Array<string | JSX.Element>;
  details?: JSX.Element;
};

export type SchoolKits = Record<School, {
  images?: Images;
  bullets: Array<string | JSX.Element>;
} | undefined>;

export const schoolKits: SchoolKits = {
  'QC Makeup Academy': {
    bullets: [
      'Personalized support',
      'Lifetime course access',
      'Vibrant student community',
    ],
  },
  'QC Design School': {
    // images: {
    //   full: {
    //     // src: require('./images/school-design.jpg'),
    //     backgroundColor: 'black',
    //     color: 'white',
    //     borderColor: '#999',
    //   },
    //   part: {
    //   },
    //   height: { xs: undefined, sm: undefined, md: 42, lg: 42, xl: 42 },
    //   buttonOffset: { xs: undefined, sm: undefined, md: undefined, lg: undefined, xl: undefined },
    // },
    bullets: [
      'Personalized support',
      'Vibrant student community',
      'Unlimited student support access',
      'VIP deals on continued learning',
      'BONUS business start-up training',
      'Professional design certifiction',
    ],
  },
  'QC Event School': {
    // images: {
    //   full: {
    //     // src: require('./images/school-event.jpg'),
    //     backgroundColor: 'black',
    //     color: 'white',
    //     borderColor: '#999',
    //   },
    //   part: {
    //   },
    //   height: { xs: undefined, sm: undefined, md: 42, lg: 42, xl: 42 },
    //   buttonOffset: { xs: undefined, sm: undefined, md: undefined, lg: undefined, xl: undefined },
    // },
    bullets: [
      'Personalized support',
      'Vibrant student community',
      'Unlimited student support access',
      'VIP deals on continued learning',
      'BONUS business start-up training',
      'Professional event-planning certifiction',
    ],
  },
  'QC Pet Studies': {
    // images: {
    //   full: {
    //     // src: require('./images/school-pet.jpg'),
    //     backgroundColor: 'black',
    //     color: 'white',
    //     borderColor: '#999',
    //   },
    //   part: {
    //   },
    //   height: { xs: undefined, sm: undefined, md: 42, lg: 42, xl: 42 },
    //   buttonOffset: { xs: undefined, sm: undefined, md: undefined, lg: undefined, xl: undefined },
    // },
    bullets: [
      'Personalized support',
      'Vibrant student community',
      'Unlimited student support access',
      'VIP deals on continued learning',
      'BONUS first-aid training',
      'BONUS business start-up training',
      'Professional pet-care certifiction',
    ],
  },
  'QC Wellness Studies': {
    bullets: [
      'Personalized support',
      'Vibrant student community',
      'Unlimited student support access',
      'VIP deals on continued learning',
      'BONUS business start-up training',
      'Professional wellness certification',
    ],
  },
  'Winghill Writing School': {
    bullets: [
      'Personalized support',
      <>Work with a <strong>professional author</strong></>,
      'Unlimited student support access',
      'VIP deals on continued learning',
    ],
  },
  'QC Career School': undefined,
  'QC Travel School': undefined,
  'QC Style Academy': undefined,
};

export const courseKits: CourseKit[] = [
  {
    courseCode: 'MZ',
    images: {
      full: {
        src: require('./images/mz/deluxe-kit-384.jpg'),
        backgroundColor: 'black',
        color: 'white',
        borderColor: '#999',
      },
      part: {
        src: require('./images/mz/brush-set-384.jpg'),
        backgroundColor: 'white',
        buttonVariant: 'primary',
      },
      height: { xs: undefined, sm: undefined, md: 148, lg: 130, xl: 157 },
      buttonOffset: { xs: undefined, sm: undefined, md: 62, lg: 49, xl: 68 },
    },
    fullBullets: [ <strong key={0}>Bonus DELUXE Kit</strong>, <strong key={1}>Bonus 17-piece brush set</strong> ],
    partBullets: [ <strong key={0}>Bonus 17-piece brush set</strong> ],
    details: (
      <DetailsPopup title="Deluxe Collection" footerText={<><p className="small">Your items will be automatically sent to you after you have submitted Unit A of the course in the Online Student Center. Items in the kit are subject to change.</p><p className="small mb-0">The DELUXE kit is not required for you to complete your assignments and will not determine your success in the course.</p></>}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={require('./images/mz/comparison.jpg')} className="img-fluid" />
        </div>
      </DetailsPopup>
    ),
  },
  {
    courseCode: [ 'I2', 'ST', 'LD', 'CC', 'FD', 'ED' ],
    // images: {
    //   full: {
    //     src: require('./images/books.png'),
    //   },
    //   part: {
    //     src: require('./images/books.png'),
    //   },
    //   height: { xs: undefined, sm: undefined, md: 271, lg: 271, xl: 271 },
    //   buttonOffset: { xs: undefined, sm: undefined, md: 62, lg: 49, xl: 68 },
    // },
    fullBullets: [ <strong key={0}>Printed textbooks included</strong> ],
    partBullets: [ <strong key={0}>Printed textbooks included</strong> ],
  },
];
