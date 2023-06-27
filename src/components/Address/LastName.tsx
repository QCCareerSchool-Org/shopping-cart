import React from 'react';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';

export const LastName: React.FC = () => {
  const { address: { lastName }, enrollmentErrors } = useStateContext();
  const dispatch = useDispatchContext();

  const change = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: 'SET_LAST_NAME', payload: e.target.value });
  };

  return (
    <div className="form-group">
      <label htmlFor="address-last-name">Last Name</label>
      <input
        id="address-last-name"
        type="text"
        className={'form-control' + (enrollmentErrors.studentAddress.lastName ? ' is-invalid' : '')}
        onChange={change}
        value={lastName}
        autoCapitalize="words"
        autoComplete="family-name"
      />
    </div>
  );
};
