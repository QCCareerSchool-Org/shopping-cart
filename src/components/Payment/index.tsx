/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { useDateContext } from '../../hooks/useDateContext';

import { useStateContext } from '../../hooks/useStateContext';
import { dateOverride } from '../../lib/dateOverride';
import { School } from '../../lib/enrollment';
import { PriceState } from '../../state/price';

import { NoShipping } from './NoShipping';
import { PaymentOptions } from './PaymentOptions';
import { PlanResult } from './PlanResult';
import { Promo, PromoCodeInput } from './PromoCodeInput';
import { Schedule } from './Schedule';
import { Shipping } from './Shipping';

type Props = {
  school: School;
  shippingOption: boolean;
  shippingOptionReversed: boolean;
  noShippingTitle?: string;
  showPromoCodeInput: boolean;
};

const getPromos = (now: Date, price: PriceState, school: School, student: boolean): Promo[] => {
  const promos: Promo[] = [
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'FOUNDIT',
      description: <>Get the <strong>Virtual Makeup</strong> course free when you enroll in <strong>Master Makeup Artistry</strong></>,
      desktopImageSrc: require('./images/coupon-FOUNDIT.jpg').default,
      mobileImageSrc: require('./images/coupon-mobile-FOUNDIT.jpg').default,
      altText: 'Get the Virtual Makeup course free when you enroll in Master Makeup Artistry',
      startDate: new Date(Date.UTC(2021, 2, 29, 13)),
      endDate: new Date(Date.UTC(2021, 3, 6, 4)),
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'SAVE50',
      description: 'Enroll in one course and get 50% off each additional course of equal or lesser value',
      desktopImageSrc: require('./images/coupon-SAVE50.jpg').default,
      mobileImageSrc: require('./images/coupon-mobile-SAVE50.jpg').default,
      altText: 'Get 50% off additional courses of equal or lesser value',
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'ADVANCED100',
      description: `Get ${price?.currency.code === 'GBP' ? '£100' : '$100'} off any advanced makeup course`,
      desktopImageSrc: price?.currency.code === 'GBP' ? require('./images/coupon-uk-ADVANCED100.jpg').default : require('./images/coupon-ADVANCED100.jpg').default,
      mobileImageSrc: price?.currency.code === 'GBP' ? require('./images/coupon-mobile-uk-ADVANCED100.jpg').default : require('./images/coupon-mobile-ADVANCED100.jpg').default,
      altText: `Get ${price?.currency.code === 'GBP' ? '£100' : '$100'} off any advanced course`,
      endDate: new Date(Date.UTC(2021, 3, 19, 13)),
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'SPRING21',
      description: 'Enroll in Master Makeup Artisty and get any advanced makeup course for FREE',
      desktopImageSrc: require('./images/coupon-SPRING21.jpg').default,
      mobileImageSrc: require('./images/coupon-mobile-SPRING21.jpg').default,
      altText: 'Get a FREE advanced course',
      startDate: new Date(Date.UTC(2021, 3, 19, 13)),
      endDate: new Date(Date.UTC(2021, 4, 1, 12)),
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'ELITE',
      description: <>Get an <strong>elite makeup kit upgrade</strong> (includes a highlight palette, contour palette, eyebrow palette, 4-pack of false lashes, a makeup travel bag, and a stainless steel palette with spatula)</>,
      desktopImageSrc: require('./images/coupon-ELITE.jpg').default,
      mobileImageSrc: require('./images/coupon-mobile-ELITE.jpg').default,
      altText: 'Get an elite makeup kit upgrade',
      endDate: new Date(Date.UTC(2021, 3, 18, 4)),
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'ELITE',
      description: <>Get an <strong>elite makeup kit upgrade</strong> (includes a highlight palette, contour palette, eyebrow palette, 4-pack of false lashes, a makeup travel bag, and a stainless steel palette with spatula)</>,
      desktopImageSrc: require('./images/coupon-ELITE.jpg').default,
      mobileImageSrc: require('./images/coupon-mobile-ELITE.jpg').default,
      altText: 'Get an elite makeup kit upgrade',
      startDate: new Date(Date.UTC(2021, 3, 18, 4)),
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'HAPPYMAY',
      description: <>Get the <strong>Virtual Makeup</strong> course for FREE when you enroll in the <strong>Master Makeup Artistry</strong> course.<br /><br />Plus, get a FREE 11-piece elite makeup kit upgrade.</>,
      desktopImageSrc: require('./images/coupon-HAPPYMAY.jpg').default,
      mobileImageSrc: require('./images/coupon-mobile-HAPPYMAY.jpg').default,
      altText: 'Free Virtual Makeup course',
      startDate: new Date(Date.UTC(2021, 4, 1, 12)),
      endDate: new Date(Date.UTC(2021, 4, 3, 13)),
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'SKINCARE60',
      description: <>Get the <strong>Skincare</strong> course at 60% off when you enroll in the <strong>Master Makeup Artisty</strong> course</>,
      desktopImageSrc: require('./images/coupon-SKINCARE60.jpg').default,
      mobileImageSrc: require('./images/coupon-mobile-SKINCARE60.jpg').default,
      altText: '60% off Skincare course',
      startDate: new Date(Date.UTC(2021, 4, 3, 13)),
      endDate: new Date(Date.UTC(2021, 4, 15, 3, 59, 59)),
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'MOTHERSDAY',
      description: <>Get the <strong>Pro Makeup Workshop</strong> for FREE when you enroll in the <strong>Master Makeup Artisty</strong> course</>,
      desktopImageSrc: require('./images/coupon-MOTHERSDAY.jpg').default,
      mobileImageSrc: require('./images/coupon-mobile-MOTHERSDAY.jpg').default,
      altText: 'Free Pro Makeup Workshop',
      startDate: new Date(Date.UTC(2021, 4, 5, 4)),
      endDate: new Date(Date.UTC(2021, 4, 17, 13)), // May 17 at 09:00
    },
  ];
  return promos.filter(p => p.schools.includes(school)
    && (p.student === 'ALLOWED' || (p.student === 'DENIED' && !student) || (p.student === 'ONLY' && student))
    && (typeof p.startDate === 'undefined' || p.startDate <= now)
    && (typeof p.endDate === 'undefined' || p.endDate > now));
};

export const Payment: React.FC<Props> = ({ school, shippingOption, shippingOptionReversed, noShippingTitle, showPromoCodeInput }) => {
  const { payment, price, meta: { student } } = useStateContext();
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const showNoShipping = price && price.cost > 0 && price.shipping > 0 && price.noShipping !== 'FORBIDDEN' && price?.noShipping !== 'REQUIRED' && shippingOption;
  const promos = getPromos(date, price, school, student);
  return (
    <section id="payment-section">
      <div className="container">
        <h2 className="h1">Payment Plan</h2>
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-5 offset-md-0 mb-4 mb-md-0">
            <PaymentOptions />
            {payment.plan === 'part' && <Schedule />}
            {showNoShipping && (shippingOptionReversed ? <Shipping school={school} /> : <NoShipping school={school} title={noShippingTitle} />)}
            {showPromoCodeInput && <PromoCodeInput promos={promos} />}
          </div>
          <div className="col-12 col-sm-10 offset-sm-1 col-md-7 offset-md-0">
            <PlanResult shippingOptionReversed={shippingOptionReversed} />
          </div>
        </div>
      </div>
    </section>
  );
};
