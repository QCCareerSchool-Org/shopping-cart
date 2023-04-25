/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { lazy, Suspense } from 'react';

import { useDateContext } from '../../hooks/useDateContext';
import { useStateContext } from '../../hooks/useStateContext';
import { dateOverride } from '../../lib/dateOverride';
import { School } from '../../lib/enrollment';
import { getPromos } from './getPromos';
import { PaymentOptions } from './PaymentOptions';
import { PlanResultCard } from './PlanResultCard';
import { Schedule } from './Schedule';
import { VisualPaymentPlans } from './VisualPaymentPlans';

const NoShipping = lazy(async () => import('./NoShipping'));
const Shipping = lazy(async () => import('./Shipping'));
const PromoCodeInput = lazy(async () => import('./PromoCodeInput'));

type Props = {
  school: School;
  shippingOption: boolean;
  shippingOptionReversed: boolean;
  noShippingTitle?: string;
  showPromoCodeInput: boolean;
  paymentOptionsReverse: boolean;
  visualPaymentPlans: boolean;
};

export const Payment: React.FC<Props> = ({ school, shippingOption, shippingOptionReversed, noShippingTitle, showPromoCodeInput, paymentOptionsReverse, visualPaymentPlans }) => {
  const { payment, price, meta: { student } } = useStateContext();
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const showNoShipping = price && price.cost > 0 && price.shipping > 0 && price.noShipping !== 'FORBIDDEN' && price?.noShipping !== 'REQUIRED' && shippingOption;
  const promos = getPromos(date, price, school, student);
  return (
    <section id="payment-section">
      <div className="container">
        <h2 className="h1">Payment Plans</h2>
        {visualPaymentPlans
          ? (
            <>
              <VisualPaymentPlans school={school} />
            </>
          )
          : (
            <div className="row">
              <div className="col-12 col-sm-10 offset-sm-1 col-md-5 offset-md-0 mb-4 mb-md-0">
                <PaymentOptions reverse={paymentOptionsReverse} />
                {payment.plan === 'part' && <Schedule />}
                {showNoShipping && (shippingOptionReversed
                  ? <Suspense fallback={<></>}><Shipping school={school} /></Suspense>
                  : <Suspense fallback={<></>}><NoShipping school={school} title={noShippingTitle} /></Suspense>
                )}
                {showPromoCodeInput && <Suspense fallback={<></>}><PromoCodeInput promos={promos} /></Suspense>}
              </div>
              <div className="col-12 col-sm-10 offset-sm-1 col-md-7 offset-md-0">
                <PlanResultCard shippingOptionReversed={shippingOptionReversed} />
              </div>
            </div>
          )
        }
      </div>
    </section>
  );
};
