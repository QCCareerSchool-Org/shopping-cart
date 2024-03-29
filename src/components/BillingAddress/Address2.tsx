import React from 'react';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';

export const Address2: React.FC = () => {
  const { billingAddress: { address2 }, enrollmentErrors } = useStateContext();
  const dispatch = useDispatchContext();

  const change = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: 'SET_BILLING_ADDRESS2', payload: e.target.value });
  };

  return (
    <div className="form-group">
      <label htmlFor="address-address2">Address Line 2</label>
      <input
        id="address-address2"
        type="text"
        className={'form-control' + (enrollmentErrors.billingAddress.address2 ? ' is-invalid' : '')}
        onChange={change}
        value={address2}
        autoCapitalize="words"
        autoComplete="billing address-line2"
      />
    </div>
  );
};
