import React from 'react';

import { School } from '../../lib/enrollment';
import { PriceState } from '../../state/price';
import { Promo } from './PromoCodeInput';

export const getPromos = (now: Date, price: PriceState, school: School, student: boolean): Promo[] => {
  const promos: Promo[] = [
    {
      schools: [ 'QC Design School' ],
      student: 'DENIED',
      code: 'BOGO100',
      description: <>Enroll in one course and get a second course free. You&apos;ll also get a {price?.currency.code === 'GBP' ? '£75' : '$100'} discount</>,
      desktopImageSrc: require('./images/design/coupon-100OFF.jpg'),
      mobileImageSrc: require('./images/design/coupon-mobile-100OFF.jpg'),
      altText: `BOGO + ${price?.currency.code === 'GBP' ? '£75' : '$100'} off`,
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'LUMINOUS',
      description: <>Enroll in <strong>Master Makeup Artistry</strong> and get the Luminous Collection free</>,
      desktopImageSrc: require('./images/design/coupon-JULY21-design.jpg'),
      mobileImageSrc: require('./images/design/coupon-mobile-JULY21-design.jpg'),
      altText: 'Free Luminous Collection',
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'PROLUMINOUS',
      description: <>Enroll in <strong>Master Makeup Artistry</strong> and get the <strong>Pro Makeup Workshop</strong> and the Luminous Collection free</>,
      desktopImageSrc: require('./images/design/coupon-JULY21-design.jpg'),
      mobileImageSrc: require('./images/design/coupon-mobile-JULY21-design.jpg'),
      altText: 'Free Pro Makeup Workshop and Luminous Collection',
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'SKINCARE',
      description: <>Enroll in <strong>Master Makeup Artistry</strong> and get the <strong>Skincare</strong> course free</>,
      desktopImageSrc: require('./images/design/coupon-JULY21-design.jpg'),
      mobileImageSrc: require('./images/design/coupon-mobile-JULY21-design.jpg'),
      altText: 'Free Skincare',
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'FREEADVANCED',
      description: <>Enroll in <strong>Master Makeup Artistry</strong> and any advanced course free</>,
      desktopImageSrc: require('./images/design/coupon-JULY21-design.jpg'),
      mobileImageSrc: require('./images/design/coupon-mobile-JULY21-design.jpg'),
      altText: 'Free advanced course',
    },

    {
      schools: [ 'QC Event School' ],
      student: 'DENIED',
      code: 'EVENTFREECOURSE',
      description: <>Enroll in a <strong>Foundation</strong> course and any second course free</>,
      desktopImageSrc: require('./images/design/coupon-JULY21-design.jpg'),
      mobileImageSrc: require('./images/design/coupon-mobile-JULY21-design.jpg'),
      altText: 'Free second course',
    },
    {
      schools: [ 'QC Event School' ],
      student: 'DENIED',
      code: 'SPECIALTY',
      description: <>Enroll in a <strong>Foundation</strong> course and one free <strong>Specialty</strong> course</>,
      desktopImageSrc: require('./images/design/coupon-JULY21-design.jpg'),
      mobileImageSrc: require('./images/design/coupon-mobile-JULY21-design.jpg'),
      altText: 'Free specialty course',
    },
    ...([ '2SPECIALTY', 'MCSPECIALTY', 'SSMCSPECIALTY' ].map(code => ({
      schools: [ 'QC Event School' as const ],
      student: 'DENIED' as const,
      code,
      description: <>Enroll in a <strong>Foundation</strong> course and two free <strong>Specialty</strong> courses</>,
      desktopImageSrc: require('./images/design/coupon-JULY21-design.jpg'),
      mobileImageSrc: require('./images/design/coupon-mobile-JULY21-design.jpg'),
      altText: 'Two free specialty courses',
    }))),
    ...([ 'MASTERCLASS', 'SSMASTERCLASS' ].map(code => ({
      schools: [ 'QC Design School' as const ],
      student: 'DENIED' as const,
      code,
      description: <>Enroll in <strong>Interior Decorating</strong> to get a second course of equal or lesser value free and save {price?.currency.code === 'GBP' ? '£100' : '$200'} off your tuition</>,
      desktopImageSrc: require('./images/design/coupon-JULY21-design.jpg'),
      mobileImageSrc: require('./images/design/coupon-mobile-JULY21-design.jpg'),
      altText: `Free second course and ${price?.currency.code === 'GBP' ? '£100' : '$200'} off`,
    }))),
    {
      schools: [ 'QC Event School', 'QC Design School' ],
      student: 'DENIED',
      code: 'BOGO',
      description: <>Buy any course and get any second course of equal or lesser value free</>,
      desktopImageSrc: require('./images/design/coupon-JULY21-design.jpg'),
      mobileImageSrc: require('./images/design/coupon-mobile-JULY21-design.jpg'),
      altText: 'Buy one course and get one free',
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'BOGO',
      description: <>Buy any course and get any* second course of equal or lesser value free<br />* excludes Airbrush Makeup Workshop, Special FX Makeup, and Hair Styling Essentials</>,
      desktopImageSrc: require('./images/design/coupon-JULY21-design.jpg'),
      mobileImageSrc: require('./images/design/coupon-mobile-JULY21-design.jpg'),
      altText: 'Buy one course and get one free',
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'SAVE50',
      description: 'Enroll in one course and get 50% off each additional course of equal or lesser value',
      desktopImageSrc: require('./images/makeup/coupon-SAVE50.jpg'),
      mobileImageSrc: require('./images/makeup/coupon-mobile-SAVE50.jpg'),
      altText: 'Get 50% off additional courses of equal or lesser value',
      displayEndDate: new Date(2021, 5, 11),
    },
    {
      schools: [ 'QC Design School' ],
      student: 'DENIED',
      code: 'SAVE50',
      description: 'Enroll in one course and get 50% off each additional course of equal or lesser value',
      desktopImageSrc: require('./images/design/coupon-SAVE50.jpg'),
      mobileImageSrc: require('./images/design/coupon-mobile-SAVE50.jpg'),
      altText: 'Get 50% off additional courses of equal or lesser value',
    },
    {
      schools: [ 'QC Event School' ],
      student: 'DENIED',
      code: 'SAVE50',
      description: 'Enroll in one course and get 50% off each additional course of equal or lesser value',
      desktopImageSrc: require('./images/event/coupon-SAVE50.jpg'),
      mobileImageSrc: require('./images/event/coupon-mobile-SAVE50.jpg'),
      altText: 'Get 50% off additional courses of equal or lesser value',
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'ELITE',
      description: <>When you enroll in <strong>Master Makeup Artistry</strong>, get an <strong>elite makeup kit upgrade</strong> (includes a highlight palette, contour palette, eyebrow palette, 4-pack of false lashes, a makeup travel bag, and a stainless steel palette with spatula)</>,
      desktopImageSrc: require('./images/makeup/coupon-ELITE.jpg'),
      mobileImageSrc: require('./images/makeup/coupon-mobile-ELITE.jpg'),
      altText: 'Get an elite makeup kit upgrade',
      startDate: new Date(Date.UTC(2021, 6, 31, 12)), // July 31 at 08:00
    },
    {
      schools: [ 'QC Event School' ],
      student: 'DENIED',
      code: 'EXPERT',
      description: <>Enroll in a Foundation course and get any Specialty course free.</>,
      desktopImageSrc: require('./images/event/coupon-EXPERT.jpg'),
      mobileImageSrc: require('./images/event/coupon-mobile-EXPERT.jpg'),
      altText: 'Enroll in a Foundation course and get any Specialty course free',
      startDate: new Date(Date.UTC(2021, 5, 9, 13)), // June 9 at 09:00
      // endDate: new Date(Date.UTC(2021, 5, 14, 13)), // June 14 at 09:00
      // displayEndDate: new Date(2021, 5, 11), // June 11
    },

    ...[ 150, 200, 300 ].map((d): Promo => ({
      schools: [ 'QC Pet Studies' ],
      student: 'DENIED',
      code: `DG${d}`,
      description: <>Get {price?.currency.code === 'GBP' ? '£' : '$'}{d} off the <strong>Dog Grooming</strong> course</>,
      desktopImageSrc: require(`./images/${price?.currency.code === 'GBP' ? 'uk-' : ''}coupon-SAVE${d}.jpg`),
      mobileImageSrc: require(`./images/${price?.currency.code === 'GBP' ? 'uk-' : ''}coupon-mobile-SAVE${d}.jpg`),
      altText: `${price?.currency.code === 'GBP' ? '£' : '$'}${d} off the Dog Grooming course`,
    })),

    ...[ 150, 200, 300 ].map((d): Promo => ({
      schools: [ 'QC Pet Studies' ],
      student: 'DENIED',
      code: `DT${d}`,
      description: <>Get {price?.currency.code === 'GBP' ? '£' : '$'}{d} off the <strong>Dog Training</strong> course</>,
      desktopImageSrc: require(`./images/${price?.currency.code === 'GBP' ? 'uk-' : ''}coupon-SAVE${d}.jpg`),
      mobileImageSrc: require(`./images/${price?.currency.code === 'GBP' ? 'uk-' : ''}coupon-mobile-SAVE${d}.jpg`),
      altText: `${price?.currency.code === 'GBP' ? '£' : '$'}${d} off the Dog Training course`,
    })),

    ...[ 50, 100, 150 ].map((d): Promo => {
      return {
        schools: [ 'QC Wellness Studies' ],
        student: 'DENIED',
        code: `${d}OFF`,
        description: <>Get {price?.currency.code === 'GBP' ? '£' : '$'}{d} off your total tuition</>,
        desktopImageSrc: require(`./images/${price?.currency.code === 'GBP' ? 'uk-' : ''}coupon-SAVE${d}.jpg`),
        mobileImageSrc: require(`./images/${price?.currency.code === 'GBP' ? 'uk-' : ''}coupon-mobile-SAVE${d}.jpg`),
        altText: `${price?.currency.code === 'GBP' ? '£' : '$'}${d} off your tuition`,
      };
    }),
  ];
  return promos.filter(p => p.schools.includes(school)
    && (p.student === 'ALLOWED' || (p.student === 'DENIED' && !student) || (p.student === 'ONLY' && student))
    && (typeof p.startDate === 'undefined' || p.startDate <= now)
    && (typeof p.endDate === 'undefined' || p.endDate > now));
};
