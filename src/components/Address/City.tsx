import React from 'react';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';

export const City: React.FC = () => {
  const { address: { city }, enrollmentErrors } = useStateContext();
  const dispatch = useDispatchContext();

  const change = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: 'SET_CITY', payload: e.target.value });
  };

  return (
    <div className="form-group">
      <label htmlFor="address-city">City</label>
      <input
        id="address-city"
        type="text"
        className={'form-control' + (enrollmentErrors.city ? ' is-invalid' : '')}
        onChange={change}
        value={city}
        autoCapitalize="off"
        autoComplete="address-level2"
      />
    </div>
  );
};
