import React from 'react';
import { useFormDispatch } from '../../hooks/useFormDispatch';
import { useFormState } from '../../hooks/useFormState';

export const LastName: React.FC = () => {
  const { address: { lastName } } = useFormState();
  const dispatch = useFormDispatch();

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch({ type: 'SET_LAST_NAME', payload: value });
  };

  return (
    <div className="form-group">
      <label htmlFor="address-last-name">Last Name</label>
      <input
        id="address-last-name"
        type="text"
        className="form-control"
        onChange={change}
        value={lastName}
        autoCapitalize="words"
        autoComplete="family-name"
      />
    </div>
  );
};
