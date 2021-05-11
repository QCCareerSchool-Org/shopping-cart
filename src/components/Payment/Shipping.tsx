import React from 'react';

import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';
import { School } from '../../lib/enrollment';

type Props = {
  school: School;
  title?: string;
};

export const Shipping: React.FC<Props> = ({ school }) => {
  const { payment: { noShipping }, price } = useStateContext();
  const dispatch = useDispatchContext();

  const shippingChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: 'SET_NO_SHIPPING', payload: !e.target.checked });
  };

  return (
    <div className="mt-4">
      <h3>Shipping</h3>
      <div className="custom-control custom-checkbox my-2">
        <input type="checkbox" id="noShippingOption" className="custom-control-input" checked={!noShipping} onChange={shippingChange} />
        <label htmlFor="noShippingOption" className="custom-control-label">
          I would like to recevie physical course materials{school === 'QC Makeup Academy' && ' and makeup kits'} for {price?.currency.symbol}{price?.shipping.toFixed(2)}
        </label>
      </div>
    </div>
  );
};
