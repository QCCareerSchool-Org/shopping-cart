import React from 'react';

import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';

export const Title: React.FC = () => {
  const { billingAddress: { title }, enrollmentErrors } = useStateContext();
  const dispatch = useDispatchContext();

  const change = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    if (value === 'Mrs.' || value === 'Miss' || value === 'Ms.' || value === 'Mr.') {
      dispatch({ type: 'SET_BILLING_TITLE', payload: value });
    }
  };

  return (
    <div className="form-group">
      <label htmlFor="address-title">Title</label>
      <select
        id="address-title"
        className={'form-control' + (enrollmentErrors.billingAddress.title ? ' is-invalid' : '')}
        onChange={change}
        value={title}
        autoComplete="honorific-prefix"
      >
        <option>Mrs.</option>
        <option>Miss</option>
        <option>Ms.</option>
        <option>Mr.</option>
      </select>
    </div>
  );
};
