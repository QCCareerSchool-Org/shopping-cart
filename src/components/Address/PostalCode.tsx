import React from 'react';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';

const postalCodeName = (countryCode: string) => {
  if (countryCode === 'US') {
    return 'Zip Code';
  } else if (countryCode === 'GB') {
    return 'Postcode';
  } else {
    return 'Postal Code';
  }
};

export const PostalCode: React.FC = () => {
  const { address: { postalCode, countryCode } } = useStateContext();
  const dispatch = useDispatchContext();

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_POSTAL_CODE', payload: e.target.value });
  };

  return (
    <div className="form-group">
      <label htmlFor="address-postal-code">{postalCodeName(countryCode)}</label>
      <input
        id="postal-code"
        type="text"
        className="form-control"
        onChange={change}
        value={postalCode}
        autoCapitalize="characters"
        autoComplete="postal-code"
      />
    </div>
  );
};
