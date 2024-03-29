/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Card, CardBody } from 'reactstrap';

import { useStateContext } from '../../hooks/useStateContext';
import { CanadaTaxCredits } from './CanadaTaxCredits';
import { PlanResult } from './PlanResult';

type Props = {
  shippingOptionReversed: boolean;
};

export const PlanResultCard: React.FC<Props> = ({ shippingOptionReversed }) => {
  const { price } = useStateContext();

  if (!price) {
    return null;
  }

  if (price.courses.length === 0) {
    return null;
  }

  return (
    <div className="d-flex justify-content-center justify-content-md-end">
      <div>
        <Card className="d-inline-block w-auto">
          <CardBody className="pb-0">
            <PlanResult shippingOptionReversed={shippingOptionReversed} />
          </CardBody>
        </Card>
        {price.countryCode === 'CA' && (
          <div className="mt-4" style={{ maxWidth: 280 }}>
            <CanadaTaxCredits />
          </div>
        )}
      </div>
    </div>
  );
};
