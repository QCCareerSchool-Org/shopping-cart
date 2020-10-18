import React from 'react';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';

export const LastName: React.FC = () => {
  const { address: { lastName } } = useStateContext();
  const dispatch = useDispatchContext();

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
