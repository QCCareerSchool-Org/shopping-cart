import React from 'react';
import { useFormDispatch } from '../../hooks/useFormDispatch';
import { useFormState } from '../../hooks/useFormState';

export const FirstName: React.FC = () => {
  const { address: { firstName } } = useFormState();
  const dispatch = useFormDispatch();

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch({ type: 'SET_FIRST_NAME', payload: value });
  };

  return (
    <div className="form-group">
      <label htmlFor="address-first-name">First Name</label>
      <input
        id="address-first-name"
        type="text"
        className="form-control"
        onChange={change}
        value={firstName}
        autoCapitalize="words"
        autoComplete="given-name"
      />
    </div>
  );
};
