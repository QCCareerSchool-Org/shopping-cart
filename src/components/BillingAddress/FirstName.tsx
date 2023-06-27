import React from 'react';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';

export const FirstName: React.FC = () => {
  const { billingAddress: { firstName }, enrollmentErrors } = useStateContext();
  const dispatch = useDispatchContext();

  const change = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: 'SET_BILLING_FIRST_NAME', payload: e.target.value });
  };

  return (
    <div className="form-group">
      <label htmlFor="address-first-name">First Name</label>
      <input
        id="address-first-name"
        type="text"
        className={'form-control' + (enrollmentErrors.billingAddress.firstName ? ' is-invalid' : '')}
        onChange={change}
        value={firstName}
        autoCapitalize="words"
        autoComplete="billing given-name"
      />
    </div>
  );
};
