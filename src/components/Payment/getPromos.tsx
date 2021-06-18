import React from 'react';

import { School } from '../../lib/enrollment';
import { PriceState } from '../../state/price';
import { Promo } from './PromoCodeInput';

export const getPromos = (now: Date, price: PriceState, school: School, student: boolean): Promo[] => {
  const promos: Promo[] = [
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'FOUNDIT',
      description: <>Get the <strong>Virtual Makeup</strong> course free when you enroll in <strong>Master Makeup Artistry</strong></>,
      desktopImageSrc: require('./images/makeup/coupon-FOUNDIT.jpg').default,
      mobileImageSrc: require('./images/makeup/coupon-mobile-FOUNDIT.jpg').default,
      altText: 'Get the Virtual Makeup course free when you enroll in Master Makeup Artistry',
      startDate: new Date(Date.UTC(2021, 2, 29, 13)),
      endDate: new Date(Date.UTC(2021, 3, 6, 4)),
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'SAVE50',
      description: 'Enroll in one course and get 50% off each additional course of equal or lesser value',
      desktopImageSrc: require('./images/makeup/coupon-SAVE50.jpg').default,
      mobileImageSrc: require('./images/makeup/coupon-mobile-SAVE50.jpg').default,
      altText: 'Get 50% off additional courses of equal or lesser value',
      displayEndDate: new Date(2021, 5, 11),
    },
    {
      schools: [ 'QC Design School' ],
      student: 'DENIED',
      code: 'SAVE50',
      description: 'Enroll in one course and get 50% off each additional course of equal or lesser value',
      desktopImageSrc: require('./images/design/coupon-SAVE50.jpg').default,
      mobileImageSrc: require('./images/design/coupon-mobile-SAVE50.jpg').default,
      altText: 'Get 50% off additional courses of equal or lesser value',
    },
    {
      schools: [ 'QC Event School' ],
      student: 'DENIED',
      code: 'SAVE50',
      description: 'Enroll in one course and get 50% off each additional course of equal or lesser value',
      desktopImageSrc: require('./images/event/coupon-SAVE50.jpg').default,
      mobileImageSrc: require('./images/event/coupon-mobile-SAVE50.jpg').default,
      altText: 'Get 50% off additional courses of equal or lesser value',
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'ADVANCED100',
      description: `Get ${price?.currency.code === 'GBP' ? '£100' : '$100'} off any advanced makeup course`,
      desktopImageSrc: price?.currency.code === 'GBP' ? require('./images/makeup/coupon-uk-ADVANCED100.jpg').default : require('./images/makeup/coupon-ADVANCED100.jpg').default,
      mobileImageSrc: price?.currency.code === 'GBP' ? require('./images/makeup/coupon-mobile-uk-ADVANCED100.jpg').default : require('./images/makeup/coupon-mobile-ADVANCED100.jpg').default,
      altText: `Get ${price?.currency.code === 'GBP' ? '£100' : '$100'} off any advanced course`,
      startDate: new Date(Date.UTC(2021, 4, 17, 13)), // May 17 at 09:00
      endDate: new Date(Date.UTC(2021, 4, 29, 3, 59, 59)), // May 28 at 23:59:59
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'SPRING21',
      description: 'Enroll in Master Makeup Artisty and get any advanced makeup course for FREE',
      desktopImageSrc: require('./images/makeup/coupon-SPRING21.jpg').default,
      mobileImageSrc: require('./images/makeup/coupon-mobile-SPRING21.jpg').default,
      altText: 'Get a FREE advanced course',
      startDate: new Date(Date.UTC(2021, 3, 19, 13)),
      endDate: new Date(Date.UTC(2021, 4, 1, 12)),
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'ELITE',
      description: <>Get an <strong>elite makeup kit upgrade</strong> (includes a highlight palette, contour palette, eyebrow palette, 4-pack of false lashes, a makeup travel bag, and a stainless steel palette with spatula)</>,
      desktopImageSrc: require('./images/makeup/coupon-ELITE.jpg').default,
      mobileImageSrc: require('./images/makeup/coupon-mobile-ELITE.jpg').default,
      altText: 'Get an elite makeup kit upgrade',
      startDate: new Date(Date.UTC(2021, 5, 1, 13)), // June 1 at 09:00
      endDate: new Date(Date.UTC(2021, 5, 12, 3, 59, 59)), // June 11 at 23:59:59
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'ELITE',
      description: <>Get an <strong>elite makeup kit upgrade</strong> (includes a highlight palette, contour palette, eyebrow palette, 4-pack of false lashes, a makeup travel bag, and a stainless steel palette with spatula)</>,
      desktopImageSrc: require('./images/makeup/coupon-ELITE.jpg').default,
      mobileImageSrc: require('./images/makeup/coupon-mobile-ELITE.jpg').default,
      altText: 'Get an elite makeup kit upgrade',
      startDate: new Date(Date.UTC(2021, 5, 14, 13)), // June 14 at 09:00
      endDate: new Date(Date.UTC(2021, 5, 26, 4)), // June 26 at 00:00
      displayEndDate: new Date(2021, 5, 25), // June 25
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'HAPPYMAY',
      description: <>Get the <strong>Virtual Makeup</strong> course for FREE when you enroll in the <strong>Master Makeup Artistry</strong> course.<br /><br />Plus, get a FREE 11-piece elite makeup kit upgrade.</>,
      desktopImageSrc: require('./images/makeup/coupon-HAPPYMAY.jpg').default,
      mobileImageSrc: require('./images/makeup/coupon-mobile-HAPPYMAY.jpg').default,
      altText: 'Free Virtual Makeup course',
      startDate: new Date(Date.UTC(2021, 4, 1, 12)),
      endDate: new Date(Date.UTC(2021, 4, 3, 13)),
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'SKINCARE60',
      description: <>Get the <strong>Skincare</strong> course at 60% off when you enroll in the <strong>Master Makeup Artisty</strong> course</>,
      desktopImageSrc: require('./images/makeup/coupon-SKINCARE60.jpg').default,
      mobileImageSrc: require('./images/makeup/coupon-mobile-SKINCARE60.jpg').default,
      altText: '60% off Skincare course',
      startDate: new Date(Date.UTC(2021, 4, 3, 13)),
      endDate: new Date(Date.UTC(2021, 4, 15, 12)),
    },
    // {
    //   schools: [ 'QC Makeup Academy' ],
    //   student: 'DENIED',
    //   code: 'MOTHERSDAY',
    //   description: <>Get the <strong>Pro Makeup Workshop</strong> for FREE when you enroll in the <strong>Master Makeup Artisty</strong> course</>,
    //   desktopImageSrc: require('./images/coupon-MOTHERSDAY.jpg').default,
    //   mobileImageSrc: require('./images/coupon-mobile-MOTHERSDAY.jpg').default,
    //   altText: 'Free Pro Makeup Workshop',
    //   startDate: new Date(Date.UTC(2021, 4, 5, 4)),
    //   endDate: new Date(Date.UTC(2021, 4, 17, 13)), // May 17 at 09:00
    // },
    {
      schools: [ 'QC Design School' ],
      student: 'DENIED',
      code: 'MAY21',
      description: <>Enroll in one of QC&apos;s design courses and receive your second course (of equal or lesser value) for free.</>,
      desktopImageSrc: require('./images/makeup/coupon-MAY21.jpg').default,
      mobileImageSrc: require('./images/makeup/coupon-mobile-MAY21.jpg').default,
      altText: 'Get any second course for free',
      startDate: new Date(Date.UTC(2021, 4, 17, 13)),
      endDate: new Date(Date.UTC(2021, 4, 29, 3, 59, 59)), // May 28 at 23:59:59 (but the promo code is still valid til June 1)
    },
    {
      schools: [ 'QC Design School' ],
      student: 'DENIED',
      code: 'SPRING100',
      description: <>Get {price?.currency.code === 'GBP' ? '£100' : '$100'} off your tutition</>,
      desktopImageSrc: price?.currency.code === 'GBP' ? require('./images/makeup/coupon-uk-SPRING100.jpg').default : require('./images/makeup/coupon-SPRING100.jpg').default,
      mobileImageSrc: price?.currency.code === 'GBP' ? require('./images/makeup/coupon-mobile-uk-SPRING100.jpg').default : require('./images/makeup/coupon-mobile-SPRING100.jpg').default,
      altText: `${price?.currency.code === 'GBP' ? '£100' : '$100'} off your tuition`,
      startDate: new Date(Date.UTC(2021, 5, 1, 13)), // June 1 at 09:00
      displayEndDate: new Date(2021, 5, 11), // June 11
      endDate: new Date(Date.UTC(2021, 5, 12, 4)), // June 12 at 00:00
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'LEVELUP',
      description: <>Get the <strong>Virtual Makeup</strong> course free when you enroll in <strong>Master Makeup Artistry</strong></>,
      desktopImageSrc: require('./images/makeup/coupon-LEVELUP.jpg').default,
      mobileImageSrc: require('./images/makeup/coupon-mobile-LEVELUP.jpg').default,
      altText: 'Get the Virtual Makeup course free when you enroll in Master Makeup Artistry',
      startDate: new Date(Date.UTC(2021, 4, 15, 12)), // May 15 at 08:00
      endDate: new Date(Date.UTC(2021, 4, 17, 3, 59, 59)), // May 16 at 23:59:59
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'WEEKEND',
      description: <>Get the <strong>Virtual Makeup</strong> course free when you enroll in <strong>Master Makeup Artistry</strong>. Also get an elite makeup kit upgrade</>,
      desktopImageSrc: require('./images/makeup/coupon-WEEKEND.jpg').default,
      mobileImageSrc: require('./images/makeup/coupon-mobile-WEEKEND.jpg').default,
      altText: 'Get the Virtual Makeup course free when you enroll in Master Makeup Artistry',
      startDate: new Date(Date.UTC(2021, 4, 29, 12)), // May 29 at 08:00
      endDate: new Date(Date.UTC(2021, 5, 1, 3, 59, 59)), // May 31 at 23:59:59
    },
    {
      schools: [ 'QC Design School' ],
      student: 'DENIED',
      code: 'WEEKEND',
      description: <>Enroll in one of QC&apos;s design courses and receive your second course (of equal or lesser value) for free. Also get a free Sherwin-Williams fan deck!</>,
      desktopImageSrc: require('./images/design/coupon-WEEKEND.jpg').default,
      mobileImageSrc: require('./images/design/coupon-mobile-WEEKEND.jpg').default,
      altText: 'Get any second course for free',
      startDate: new Date(Date.UTC(2021, 4, 29, 12)), // May 29 at 08:00
      endDate: new Date(Date.UTC(2021, 5, 1, 3, 59, 59)), // May 31 at 23:59:59
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'FREEPRO',
      description: <>Enroll in the <strong>Master Makeup Artistry</strong> course and get the <strong>Pro Makeup Workshop</strong> for free!</>,
      desktopImageSrc: require('./images/makeup/coupon-FREEPRO.jpg').default,
      mobileImageSrc: require('./images/makeup/coupon-mobile-FREEPRO.jpg').default,
      altText: 'Get the Pro Makeup Workshop for free when you enroll in Master Makeup Artistry',
      startDate: new Date(Date.UTC(2021, 5, 1, 13)), // June 1 at 09:00
      endDate: new Date(Date.UTC(2021, 5, 12, 3, 59, 59)), // June 11 at 23:59:59
    },
    {
      schools: [ 'QC Design School' ],
      student: 'DENIED',
      code: 'JUNE21',
      description: <>Enroll in one course and get your second course (of equal or lesser value) for free.</>,
      desktopImageSrc: require('./images/makeup/coupon-MAY21.jpg').default,
      mobileImageSrc: require('./images/makeup/coupon-mobile-MAY21.jpg').default,
      altText: 'Enroll in one course and get your second course free',
      startDate: new Date(Date.UTC(2021, 5, 1, 13)), // June 1 at 09:00
      endDate: new Date(Date.UTC(2021, 5, 12, 4)), // June 12 at 00:00
      displayEndDate: new Date(2021, 5, 11), // June 11
    },
    {
      schools: [ 'QC Event School' ],
      student: 'DENIED',
      code: 'WEDDING21',
      description: <>Enroll in <strong>Event &amp; Wedding Planning</strong> and get both <strong>Luxury Wedding Planning</strong> and <strong>Destination Wedding Planning</strong> free.</>,
      desktopImageSrc: require('./images/event/coupon-WEDDING21.jpg').default,
      mobileImageSrc: require('./images/event/coupon-mobile-WEDDING21.jpg').default,
      altText: 'Enroll in Event & Wedding Planning and get two free specialty courses',
      startDate: new Date(Date.UTC(2021, 5, 14, 13)), // June 14 at 09:00
      endDate: new Date(Date.UTC(2021, 5, 28, 13)), // June 28 at 09:00
      displayEndDate: new Date(2021, 5, 25), // June 11
    },
    {
      schools: [ 'QC Event School' ],
      student: 'DENIED',
      code: 'EXPERT',
      description: <>Enroll in a Foundation course and get any Specialty course free.</>,
      desktopImageSrc: require('./images/event/coupon-EXPERT.jpg').default,
      mobileImageSrc: require('./images/event/coupon-mobile-EXPERT.jpg').default,
      altText: 'Enroll in a Foundation course and get any Specialty course free',
      startDate: new Date(Date.UTC(2021, 5, 9, 13)), // June 9 at 09:00
      endDate: new Date(Date.UTC(2021, 5, 14, 13)), // June 14 at 09:00
      displayEndDate: new Date(2021, 5, 11), // June 11
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'BONUSGIFT',
      description: <>Enroll in <strong>Master Makeup Artisty</strong> and get the <strong>Pro Makeup Workshop</strong>. Plus, get a free 11-piece Elite Makeup Kit. </>,
      desktopImageSrc: require('./images/makeup/coupon-BONUSGIFT.jpg').default,
      mobileImageSrc: require('./images/makeup/coupon-mobile-BONUSGIFT.jpg').default,
      altText: 'Get the Pro Makeup Workshop for free and an 11-piece makeup kit',
      startDate: new Date(Date.UTC(2021, 5, 12, 12)), // June 12 at 08:00
      endDate: new Date(Date.UTC(2021, 5, 14, 13)), // June 14 at 09:00
      displayEndDate: new Date(2021, 5, 13), // June 13
    },
    {
      schools: [ 'QC Event School' ],
      student: 'DENIED',
      code: 'BONUSGIFT',
      description: <>Enroll in <strong>Event &amp; Wedding Planning</strong> and get both <strong>Luxury Wedding Planning</strong> and <strong>Destination Wedding Planning</strong> free. Also get a free leather portfolio!</>,
      desktopImageSrc: require('./images/event/coupon-BONUSGIFT.jpg').default,
      mobileImageSrc: require('./images/event/coupon-mobile-BONUSGIFT.jpg').default,
      altText: 'Enroll in Event & Wedding Planning and get two free specialty courses',
      startDate: new Date(Date.UTC(2021, 5, 12, 12)), // June 12 at 08:00
      endDate: new Date(Date.UTC(2021, 5, 14, 13)), // June 14 at 09:00
      displayEndDate: new Date(2021, 5, 13), // June 13
    },
    {
      schools: [ 'QC Design School' ],
      student: 'DENIED',
      code: 'BONUSGIFT',
      description: <>Enroll in one course and get a second course of equal or lesser value FREE. Also get a free leather portfolio!</>,
      desktopImageSrc: require('./images/design/coupon-BONUSGIFT.jpg').default,
      mobileImageSrc: require('./images/design/coupon-mobile-BONUSGIFT.jpg').default,
      altText: 'Enroll one cours and get a second course free',
      startDate: new Date(Date.UTC(2021, 5, 12, 12)), // June 12 at 08:00
      endDate: new Date(Date.UTC(2021, 5, 14, 13)), // June 14 at 09:00
      displayEndDate: new Date(2021, 5, 13), // June 13
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'SUMMER21',
      description: <>Enroll in any Foundation course and get any Advanced course free.</>,
      desktopImageSrc: require('./images/makeup/coupon-SUMMER21.jpg').default,
      mobileImageSrc: require('./images/makeup/coupon-mobile-SUMMER21.jpg').default,
      altText: 'Enroll in any Foundation course and get any Advanced course free',
      startDate: new Date(Date.UTC(2021, 5, 14, 13)), // June 14 at 09:00
      endDate: new Date(Date.UTC(2021, 5, 18, 13, 30)), // June 18 at 09:30
      displayEndDate: new Date(2021, 5, 25), // June 25
    },
    {
      schools: [ 'QC Event School' ],
      student: 'DENIED',
      code: 'SUMMER21',
      description: <>Enroll in any Foundation course and get any Specialty course free.</>,
      desktopImageSrc: require('./images/event/coupon-EXPERT.jpg').default,
      mobileImageSrc: require('./images/event/coupon-mobile-EXPERT.jpg').default,
      altText: 'Enroll in any Foundation course and get any Specialty course free',
      startDate: new Date(Date.UTC(2021, 5, 14, 13)), // June 14 at 09:00
      endDate: new Date(Date.UTC(2021, 5, 18, 13, 30)), // June 18 at 09:30
      displayEndDate: new Date(2021, 5, 25), // June 25
    },
    {
      schools: [ 'QC Design School' ],
      student: 'DENIED',
      code: 'SUMMER21',
      description: <>Enroll in any course and get your second course of equal or lesser value FREE!</>,
      desktopImageSrc: require('./images/design/coupon-FREESECONDCOURSE.jpg').default,
      mobileImageSrc: require('./images/design/coupon-mobile-FREESECONDCOURSE.jpg').default,
      altText: 'Get your second course FREE',
      startDate: new Date(Date.UTC(2021, 5, 14, 13)), // June 14 at 09:00
      endDate: new Date(Date.UTC(2021, 5, 18, 13, 30)), // June 18 at 09:30
      displayEndDate: new Date(2021, 5, 25), // June 25
    },
    {
      schools: [ 'QC Design School' ],
      student: 'DENIED',
      code: 'DESIGN100',
      description: <>Get {price?.currency.code === 'GBP' ? '£100' : '$100'} off your tuition</>,
      desktopImageSrc: price?.currency.code === 'GBP' ? require('./images/design/coupon-uk-100OFF.jpg').default : require('./images/design/coupon-100OFF.jpg').default,
      mobileImageSrc: price?.currency.code === 'GBP' ? require('./images/design/coupon-mobile-uk-100OFF.jpg').default : require('./images/design/coupon-mobile-100OFF.jpg').default,
      altText: `${price?.currency.code === 'GBP' ? '£100' : '$100'} off your tuition`,
      startDate: new Date(Date.UTC(2021, 5, 14, 13)), // June 14 at 09:00
      displayEndDate: new Date(2021, 5, 25), // June 25
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'FATHERSDAY',
      description: <>Get {price?.currency.code === 'GBP' ? '£50' : '$50'} off your tuition and get a FREE Advanced makeup course</>,
      desktopImageSrc: price?.currency.code === 'GBP' ? require('./images/makeup/coupon-FATHERSDAY-makeup-uk.jpg').default : require('./images/makeup/coupon-FATHERSDAY-makeup.jpg').default,
      mobileImageSrc: price?.currency.code === 'GBP' ? require('./images/makeup/coupon-mobile-FATHERSDAY-makeup-uk.jpg').default : require('./images/makeup/coupon-mobile-FATHERSDAY-makeup.jpg').default,
      altText: `${price?.currency.code === 'GBP' ? '£50' : '$50'} off your tuition + FREE Advanced course`,
      startDate: new Date(Date.UTC(2021, 5, 18, 13, 30)), // June 18 at 09:30
      endDate: new Date(2021, 5, 20), // June 20 at 00:00
      displayEndDate: new Date(2021, 5, 20), // June 20
    },
    {
      schools: [ 'QC Design School' ],
      student: 'DENIED',
      code: 'FATHERSDAY',
      description: <>Get a deulxe design kit, plus get a second course of equal or lesser value for FREE</>,
      desktopImageSrc: require('./images/design/coupon-FATHERSDAY-design.jpg').default,
      mobileImageSrc: require('./images/design/coupon-mobile-FATHERSDAY-design.jpg').default,
      altText: 'Deluxe design kit + second course FREE',
      startDate: new Date(Date.UTC(2021, 5, 18, 13, 30)), // June 18 at 09:30
      endDate: new Date(2021, 5, 20), // June 20 at 00:00
      displayEndDate: new Date(2021, 5, 20), // June 20
    },
    {
      schools: [ 'QC Event School' ],
      student: 'DENIED',
      code: 'FATHERSDAY',
      description: <>Get {price?.currency.code === 'GBP' ? '£50' : '$50'} off your tuition and get a FREE Advanced makeup course</>,
      desktopImageSrc: price?.currency.code === 'GBP' ? require('./images/event/coupon-FATHERSDAY-event-uk.jpg').default : require('./images/event/coupon-FATHERSDAY-event.jpg').default,
      mobileImageSrc: price?.currency.code === 'GBP' ? require('./images/event/coupon-mobile-FATHERSDAY-event-uk.jpg').default : require('./images/event/coupon-mobile-FATHERSDAY-event.jpg').default,
      altText: `${price?.currency.code === 'GBP' ? '£50' : '$50'} off your tuition + FREE Advanced course`,
      startDate: new Date(Date.UTC(2021, 5, 18, 13, 30)), // June 18 at 09:30
      endDate: new Date(2021, 5, 20), // June 20 at 00:00
      displayEndDate: new Date(2021, 5, 20), // June 20
    },

    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'SUMMER21',
      description: <>Enroll in any Foundation course and get any Advanced course free.</>,
      desktopImageSrc: require('./images/makeup/coupon-SUMMER21.jpg').default,
      mobileImageSrc: require('./images/makeup/coupon-mobile-SUMMER21.jpg').default,
      altText: 'Enroll in any Foundation course and get any Advanced course free',
      startDate: new Date(Date.UTC(2021, 5, 20, 0)), // June 20 at 00:00
      endDate: new Date(Date.UTC(2021, 5, 28, 9)), // June 28 at 09:00
      displayEndDate: new Date(2021, 5, 25), // June 25
    },
    {
      schools: [ 'QC Event School' ],
      student: 'DENIED',
      code: 'SUMMER21',
      description: <>Enroll in any Foundation course and get any Specialty course free.</>,
      desktopImageSrc: require('./images/event/coupon-EXPERT.jpg').default,
      mobileImageSrc: require('./images/event/coupon-mobile-EXPERT.jpg').default,
      altText: 'Enroll in any Foundation course and get any Specialty course free',
      startDate: new Date(Date.UTC(2021, 5, 20, 0)), // June 20 at 00:00
      endDate: new Date(Date.UTC(2021, 5, 28, 9)), // June 28 at 09:00
      displayEndDate: new Date(2021, 5, 25), // June 25
    },
    {
      schools: [ 'QC Design School' ],
      student: 'DENIED',
      code: 'SUMMER21',
      description: <>Enroll in any course and get your second course of equal or lesser value FREE!</>,
      desktopImageSrc: require('./images/design/coupon-FREESECONDCOURSE.jpg').default,
      mobileImageSrc: require('./images/design/coupon-mobile-FREESECONDCOURSE.jpg').default,
      altText: 'Get your second course FREE',
      startDate: new Date(Date.UTC(2021, 5, 20, 0)), // June 20 at 00:00
      endDate: new Date(Date.UTC(2021, 5, 28, 9)), // June 28 at 09:00
      displayEndDate: new Date(2021, 5, 25), // June 25
    },
  ];
  return promos.filter(p => p.schools.includes(school)
    && (p.student === 'ALLOWED' || (p.student === 'DENIED' && !student) || (p.student === 'ONLY' && student))
    && (typeof p.startDate === 'undefined' || p.startDate <= now)
    && (typeof p.endDate === 'undefined' || p.endDate > now));
};
