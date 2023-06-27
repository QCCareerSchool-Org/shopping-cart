import React from 'react';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';

export const EmailAddress: React.FC = () => {
  const { billingAddress: { emailAddress }, enrollmentErrors } = useStateContext();
  const dispatch = useDispatchContext();

  const change = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: 'SET_BILLING_EMAIL_ADDRESS', payload: e.target.value });
  };

  return (
    <div className="form-group">
      <label htmlFor="address-email">Email Address</label>
      <input
        id="address-email"
        type="email"
        className={'form-control' + (enrollmentErrors.billingAddress.emailAddress ? ' is-invalid' : '')}
        onChange={change}
        value={emailAddress}
        autoCapitalize="off"
        autoComplete="email"
      />
    </div>
  );
};
