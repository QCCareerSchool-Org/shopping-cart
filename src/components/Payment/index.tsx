/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { useDateContext } from '../../hooks/useDateContext';

import { useStateContext } from '../../hooks/useStateContext';
import { dateOverride } from '../../lib/dateOverride';
import { School } from '../../lib/enrollment';
import { getPromos } from './getPromos';

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
