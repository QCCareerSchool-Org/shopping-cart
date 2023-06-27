import React from 'react';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';

export const Address1: React.FC = () => {
  const { address: { address1 }, enrollmentErrors } = useStateContext();
  const dispatch = useDispatchContext();

  const change = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: 'SET_ADDRESS1', payload: e.target.value });
  };

  return (
    <div className="form-group">
      <label htmlFor="address-address1">Address Line 1</label>
      <input
        id="address-address1"
        type="text"
        className={'form-control' + (enrollmentErrors.studentAddress.address1 ? ' is-invalid' : '')}
        onChange={change}
        value={address1}
        autoCapitalize="words"
        autoComplete="shipping address-line1"
      />
    </div>
  );
};
