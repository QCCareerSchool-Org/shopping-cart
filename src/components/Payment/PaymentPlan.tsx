import React from 'react';
import { useStateContext } from '../../hooks/useStateContext';

export const PaymentPlan: React.FC = () => {
  const { price } = useStateContext();
  return <pre>{JSON.stringify(price, null, ' ')}</pre>;
};
