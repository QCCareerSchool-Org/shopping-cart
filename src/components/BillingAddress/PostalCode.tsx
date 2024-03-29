import { postalZip } from '@qccareerschool/helper-functions';
import React from 'react';

import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';
import { ucWords } from '../../lib/ucWords';

export const PostalCode: React.FC = () => {
  const { billingAddress: { postalCode, countryCode }, enrollmentErrors } = useStateContext();
  const dispatch = useDispatchContext();

  const change = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: 'SET_BILLING_POSTAL_CODE', payload: e.target.value });
  };

  return (
    <div className="form-group">
      <label htmlFor="address-postal-code">{ucWords(postalZip(countryCode))}</label>
      <input
        id="postal-code"
        type="text"
        className={'form-control' + (enrollmentErrors.billingAddress.postalCode ? ' is-invalid' : '')}
        onChange={change}
        value={postalCode}
        autoCapitalize="characters"
        autoComplete="billing postal-code"
      />
    </div>
  );
};
