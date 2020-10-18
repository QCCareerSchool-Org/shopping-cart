import React from 'react';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';

export const EmailAddress: React.FC = () => {
  const { address: { emailAddress } } = useStateContext();
  const dispatch = useDispatchContext();

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_EMAIL_ADDRESS', payload: e.target.value });
  };

  return (
    <div className="form-group">
      <label htmlFor="address-email">Email Address</label>
      <input
        id="address-email"
        type="email"
        className="form-control"
        onChange={change}
        value={emailAddress}
        autoCapitalize="off"
        autoComplete="email"
      />
    </div>
  );
};
