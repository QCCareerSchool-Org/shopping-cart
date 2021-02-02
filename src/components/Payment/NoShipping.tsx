import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvira } from '@fortawesome/free-brands-svg-icons/faEnvira';

import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';
import { School } from '../Form';

type Props = {
  school: School;
  greenDiscount?: string;
}

export const NoShipping: React.FC<Props> = ({ school, greenDiscount = 'Green Discount' }) => {
  const { payment: { noShipping }, price } = useStateContext();
  const dispatch = useDispatchContext();

  const noShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_NO_SHIPPING', payload: e.target.checked });
  };

  return (
    <div className="alert alert-success mt-4">
    <h3>{greenDiscount} <FontAwesomeIcon icon={faEnvira} /></h3>
    <div className="custom-control custom-checkbox my-2">
      <input type="checkbox" id="noShippingOption" className="custom-control-input" checked={noShipping} onChange={noShippingChange} />
      <label htmlFor="noShippingOption" className="custom-control-label">Get a {price?.currency.symbol}{price?.shipping.toFixed(2)} discount with online-only learning</label>
    </div>
    <strong>Note:</strong> No materials {school === 'QC Makeup Academy' && 'or makeup kit(s)'} will be shipped.
  </div>
  );
};
