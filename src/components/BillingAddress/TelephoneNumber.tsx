import React from 'react';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';

export const TelephoneNumber: React.FC = () => {
  const { billingAddress: { telephoneNumber }, enrollmentErrors } = useStateContext();
  const dispatch = useDispatchContext();

  const change = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: 'SET_BILLING_TELEPHONE_NUMBER', payload: e.target.value });
  };

  return (
    <div className="form-group">
      <label htmlFor="address-telephone">Telephone Number</label>
      <input
        id="address-telephone"
        type="tel"
        className={'form-control' + (enrollmentErrors.billingAddress.telephoneNumber ? ' is-invalid' : '')}
        onChange={change}
        value={telephoneNumber}
        autoCapitalize="off"
        autoComplete="billing tel"
      />
    </div>
  );
};
