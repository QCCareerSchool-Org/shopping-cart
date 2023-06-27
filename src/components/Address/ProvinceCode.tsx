import { provinceState } from '@qccareerschool/helper-functions';
import React from 'react';

import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';
import { ucWords } from '../../lib/ucWords';

export const ProvinceCode: React.FC = () => {
  const { address: { countryCode, provinceCode, provinces }, enrollmentErrors } = useStateContext();
  const dispatch = useDispatchContext();

  const change = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch({ type: 'SET_PROVINCE_CODE', payload: { provinceCode: e.target.value || null, manual: true } });
  };

  return (
    <div className="form-group">
      <label htmlFor="address-province-code">{ucWords(provinceState(countryCode))}</label>
      <select
        id="address-province-code"
        className={'form-control' + (enrollmentErrors.studentAddress.provinceCode ? ' is-invalid' : '')}
        onChange={change}
        value={provinceCode ?? ''}
        autoComplete="shipping address-level1"
      >
        <option value="">---</option>
        {provinces.map(p => <option key={p.code} value={p.code}>{p.name}</option>)}
      </select>
    </div>
  );
};
