import React from 'react';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';

export const TelephoneNumber: React.FC = () => {
  const { address: { telephoneNumber } } = useStateContext();
  const dispatch = useDispatchContext();

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_TELEPHONE_NUMBER', payload: e.target.value });
  };

  return (
    <div className="form-group">
      <label htmlFor="address-telephone">Telephone Number</label>
      <input
        id="address-telephone"
        type="telephone"
        className="form-control"
        onChange={change}
        value={telephoneNumber}
        autoCapitalize="off"
        autoComplete="tel"
      />
    </div>
  );
};
