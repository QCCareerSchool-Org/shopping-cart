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
}

const getPromos = (now: Date, price: PriceState, school: School, student: boolean): Promo[] => {
  const promos: Promo[] = [
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'FOUNDIT',
      description: <>Get the <strong>Virtual Makeup</strong> course free when you enroll in <strong>Master Makeup Artistry</strong></>,
      desktopImageSrc: require('./images/coupon-FOUNDIT.jpg'),
      mobileImageSrc: require('./images/coupon-mobile-FOUNDIT.jpg'),
      altText: 'Get the Virtual Makeup course free when you enroll in Master Makeup Artistry',
      startDate: new Date(Date.UTC(2021, 2, 29, 13)),
      endDate: new Date(Date.UTC(2021, 3, 6, 4)),
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'SAVE50',
      description: 'Enroll in one course and get 50% off each additional course of equal or lesser value',
      desktopImageSrc: require('./images/coupon-SAVE50.jpg'),
      mobileImageSrc: require('./images/coupon-mobile-SAVE50.jpg'),
      altText: 'Get 50% off additional courses of equal or lesser value',
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'ADVANCED100',
      description: `Get ${price?.currency.code === 'GBP' ? '£100' : '$100'} off any advanced makeup course`,
      desktopImageSrc: price?.currency.code === 'GBP' ? require('./images/coupon-uk-ADVANCED100.jpg') : require('./images/coupon-ADVANCED100.jpg'),
      mobileImageSrc: price?.currency.code === 'GBP' ? require('./images/coupon-mobile-uk-ADVANCED100.jpg') : require('./images/coupon-mobile-ADVANCED100.jpg'),
      altText: `Get ${price?.currency.code === 'GBP' ? '£100' : '$100'} off any advanced course`,
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'ELITE',
      description: <>Get an <strong>elite makeup kit upgrade</strong> (includes a highlight palette, contour palette, eyebrow palette, 4-pack of false lashes, a makeup travel bag, and a stainless steel palette with spatula)</>,
      desktopImageSrc: require('./images/coupon-ELITE.jpg'),
      mobileImageSrc: require('./images/coupon-mobile-ELITE.jpg'),
      altText: 'Get an elite makeup kit upgrade',
      endDate: new Date(Date.UTC(2021, 3, 18, 4)),
    },
    {
      schools: [ 'QC Makeup Academy' ],
      student: 'DENIED',
      code: 'ELITE',
      description: <>Get an <strong>elite makeup kit upgrade</strong> (includes a highlight palette, contour palette, eyebrow palette, 4-pack of false lashes, a makeup travel bag, and a stainless steel palette with spatula)</>,
      desktopImageSrc: require('./images/coupon-ELITE.jpg'),
      mobileImageSrc: require('./images/coupon-mobile-ELITE.jpg'),
      altText: 'Get an elite makeup kit upgrade',
      startDate: new Date(Date.UTC(2021, 3, 18, 4)),
    },
  ];
  return promos.filter(p => p.schools.includes(school)
    && (p.student === 'ALLOWED' || (p.student === 'DENIED' && !student) || (p.student === 'ONLY' && student))
    && (typeof p.startDate === 'undefined' || p.startDate <= now)
    && (typeof p.endDate === 'undefined' || p.endDate > now)
  );
};

export const Payment: React.FC<Props> = ({ school, shippingOption, shippingOptionReversed, noShippingTitle, showPromoCodeInput }) => {
  const { payment, price, meta: { student } } = useStateContext();
  const serverDate = useDateContext();
  const date = dateOverride() || serverDate;
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
