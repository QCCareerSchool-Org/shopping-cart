import React from 'react';
import { CSSProperties } from 'styled-components';
import { DetailsPopup } from './DetailsPopup';

type Image = {
  sm: any;
  md: any;
  lg: any;
  backgroundColor?: CSSProperties['backgroundColor'];
  color?: CSSProperties['color'];
  borderColor?: CSSProperties['borderColor'];
};

export type CourseKit = {
  courseCode: string;
  images?: {
    full: Image;
    part: Image;
    height: { md: number; lg: number };
    buttonOffset: { md: number; lg: number };
  };
  fullBullets: Array<string | JSX.Element>;
  partBullets: Array<string | JSX.Element>;
  details?: JSX.Element;
};

export const courseKits: CourseKit[] = [
  {
    courseCode: 'MZ',
    images: {
      full: {
        sm: require('./images/mz/deluxe-kit-369.jpg'),
        md: require('./images/mz/deluxe-kit-384.jpg'),
        lg: require('./images/mz/deluxe-kit-284.jpg'),
        backgroundColor: 'black',
        color: 'white',
        borderColor: '#999',
      },
      part: {
        sm: require('./images/mz/brush-set-369.jpg'),
        md: require('./images/mz/brush-set-264.jpg'),
        lg: require('./images/mz/brush-set-284.jpg'),
        backgroundColor: 'white',
      },
      height: { md: 175, lg: 144 },
      buttonOffset: { md: 78, lg: 49 },
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
];
