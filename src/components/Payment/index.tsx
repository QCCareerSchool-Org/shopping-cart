import React from 'react';

import { PaymentOptions } from './PaymentOptions';
import { PaymentPlan } from './PaymentPlan';

export const Payment: React.FC = () => {
  return (
    <section>
      <div className="container">
        <h2>Payment Plan</h2>
        <div className="row">
          <div className="col col-md-6">
            <PaymentOptions />
          </div>
          <div className="col col-md-6">
            <PaymentPlan />
          </div>
        </div>
      </div>
    </section>
  );
};
