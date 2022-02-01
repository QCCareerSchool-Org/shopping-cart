/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';
import { School } from '../../lib/enrollment';

type Props = {
  school: School;
  title?: string;
};

const NoShipping: React.FC<Props> = ({ school, title = 'Green Discount' }) => {
  const { payment: { noShipping }, price } = useStateContext();
  const dispatch = useDispatchContext();

  const noShippingChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: 'SET_NO_SHIPPING', payload: e.target.checked });
  };

  return (
    // <div className="alert alert-success mt-4">
    <div className="mt-4">
      <h3>{title}</h3>
      <div className="custom-control custom-checkbox my-2">
        <input type="checkbox" id="noShippingOption" className="custom-control-input" checked={noShipping} onChange={noShippingChange} />
        <label htmlFor="noShippingOption" className="custom-control-label">Get a {price?.currency.symbol}{price?.shipping.toFixed(2)} discount with online-only learning</label>
      </div>
      <strong>Note:</strong> No materials {school === 'QC Makeup Academy' && 'or makeup kit(s)'} will be shipped.
    </div>
  );
};

export default NoShipping;
