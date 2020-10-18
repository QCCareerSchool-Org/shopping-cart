import React from 'react';

import { PlanFull } from './PlanFull';
import { PlanPart } from './PlanPart';

export const PaymentOptions: React.FC = () => {
  return (
    <>
      <h3>Payment Options</h3>
      <div className="form-group">
        <PlanPart />
        <div className="mt-2"></div>
        <PlanFull />
      </div>
    </>
  );
};
