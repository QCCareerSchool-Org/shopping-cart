import React, { memo } from 'react';

import { PlanFull } from './PlanFull';
import { PlanPart } from './PlanPart';

type Props = {
  reverse: boolean;
};

export const PaymentOptions = memo(({ reverse }: Props) => {
  return (
    <>
      <h3>Payment Options</h3>
      <div className="form-group">
        {reverse ?
          (
            <>
              <PlanPart />
              <div className="mt-2"></div>
              <PlanFull />
            </>
          )
          : (
            <>
              <PlanFull />
              <div className="mt-2"></div>
              <PlanPart />
            </>
          )
        }
      </div>
    </>
  );
});

PaymentOptions.displayName = 'PaymentOptions';
