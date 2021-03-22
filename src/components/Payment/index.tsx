import React from 'react';

import { useStateContext } from '../../hooks/useStateContext';
import { School } from '../../lib/enrollment';

import { NoShipping } from './NoShipping';
import { PaymentOptions } from './PaymentOptions';
import { PlanResult } from './PlanResult';
import { PromoCodeInput } from './PromoCodeInput';
import { Schedule } from './Schedule';
import { Shipping } from './Shipping';

type Props = {
  school: School;
  shippingOption: boolean;
  shippingOptionReversed: boolean;
  noShippingTitle?: string;
  showPromoCodeInput: boolean;
}

export const Payment: React.FC<Props> = ({ school, shippingOption, shippingOptionReversed, noShippingTitle, showPromoCodeInput }) => {
  const { payment, price } = useStateContext();
  const showNoShipping = price && price.cost > 0 && price.shipping > 0 && price.noShipping !== 'FORBIDDEN' && price?.noShipping !== 'REQUIRED' && shippingOption;
  return (
    <section id="payment-section">
      <div className="container">
        <h2 className="h1">Payment Plan</h2>
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-6 mb-4 mb-md-0">
            <PaymentOptions />
            {payment.plan === 'part' && <Schedule />}
            {showNoShipping && (shippingOptionReversed ? <Shipping school={school} /> : <NoShipping school={school} title={noShippingTitle} />)}
            {price && price.courses.length > 0 && showPromoCodeInput && <PromoCodeInput />}
          </div>
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-6">
            <PlanResult shippingOptionReversed={shippingOptionReversed} />
          </div>
        </div>
      </div>
    </section>
  );
};
