import React from 'react';

import { CSSProperties } from 'styled-components';
import styles from '../../../components/coloredList.module.css';
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
      'Professional design certification',
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
        src: require('./images/mz/deluxe-kit-white-384.jpg'),
        backgroundColor: 'white',
        buttonVariant: 'primary',
      },
      height: { xs: undefined, sm: undefined, md: 148, lg: 130, xl: 157 },
      buttonOffset: { xs: undefined, sm: undefined, md: 62, lg: 49, xl: 68 },
    },
    fullBullets: [ <strong key={0}>Bonus DELUXE Kit</strong>, <strong key={1}>Bonus 17-piece brush set</strong> ],
    partBullets: [ <strong key={0}>Bonus DELUXE Kit</strong>, <strong key={1}>Bonus 17-piece brush set</strong> ],
    details: (
      <DetailsPopup
        title="Deluxe Collection" footerText={(
          <div className="text-start">
            <p className="small">Your items will be automatically sent to you after you have submitted Unit A of the course in the Online Student Center. Items in the kit are subject to change.</p>
            <p className="small mb-0">The DELUXE Collection is not required for you to complete your assignments and will not determine your success in the course.</p>
          </div>
        )}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p>Get the entire <strong>DELUXE Kit with 17-piece brush set</strong> when you enroll in <strong>Master Makeup Artistry</strong>.</p>
          <div>
            <img src={require('../../../images/deluxe-kit-numbers-no-description.jpg')} width="650" height="1056" className="img-fluid" />
          </div>
          <ol className={styles.coloredList}>
            <li>17-piece professional brush set</li>
            <li>88-shade eye shadow palette</li>
            <li>32-shade lip palette</li>
            <li>28-shade blush palette</li>
            <li>20-shade conceal &amp; correct palette</li>
            <li>9-shade contour palette</li>
            <li>4-shade highlight palette</li>
            <li>5-shade eyebrow palette</li>
            <li>4 sets of faux lashes</li>
            <li>Pro palette &amp; spatula</li>
          </ol>
        </div>
      </DetailsPopup>
    ),
  },
  {
    courseCode: [ 'I2', 'ST', 'LD', 'CC' ], // exclude FD and ED, because we don't want it showing on the event carts
    images: {
      full: {
        src: require('./images/design-books.png'),
      },
      part: {
        src: require('./images/design-books.png'),
      },
      height: { xs: undefined, sm: undefined, md: 140, lg: 122, xl: 148 },
      buttonOffset: { xs: undefined, sm: undefined, md: 51, lg: 45, xl: 55 },
    },
    fullBullets: [ <strong key={0}>Printed textbooks included</strong> ],
    partBullets: [ <strong key={0}>Printed textbooks included</strong> ],
  },
];
