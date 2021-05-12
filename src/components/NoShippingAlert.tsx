import React from 'react';
import { useStateContext } from '../hooks/useStateContext';

export const NoShippingAlert: React.FC = () => {
  const { price } = useStateContext();

  if (price?.noShippingMessage) {
    return (
      <div className="alert alert-info">
        <h6>Please Note</h6>
        <p className="mb-0" dangerouslySetInnerHTML={{ __html: price.noShippingMessage }}></p>
      </div>
    );
  }
  return null;
};
