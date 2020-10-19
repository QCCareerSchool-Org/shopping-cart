import React from 'react';

import { useStateContext } from '../../hooks/useStateContext';
import { School } from '../Form';

import { NoShipping } from './NoShipping';
import { PaymentOptions } from './PaymentOptions';
import { PlanResult } from './PlanResult';
import { Schedule } from './Schedule';

type Props = {
  school: School;
  allowNoShipping: boolean;
  greenDiscount?: string;
}

export const Payment: React.FC<Props> = ({ school, allowNoShipping, greenDiscount }) => {
  const { payment, price } = useStateContext();
  const showNoShipping = price && price.cost > 0 && price.shipping > 0 && price.noShipping !== 'FORBIDDEN' && price?.noShipping !== 'REQUIRED' && allowNoShipping;
  return (
    <section>
      <div className="container">
        <h2>Payment Plan</h2>
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-6 mb-4 mb-md-0">
            <PaymentOptions />
            {payment.plan === 'part' && <Schedule />}
            {showNoShipping && <NoShipping school={school} greenDiscount={greenDiscount} />}
          </div>
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-5 offset-lg-1 col-xl-4 offset-xl-2">
            <PlanResult />
          </div>
        </div>
      </div>
    </section>
  );
};
