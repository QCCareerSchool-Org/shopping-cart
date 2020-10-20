import React, { useEffect, useLayoutEffect, useState } from 'react';
import { needsProvince, provinceState } from '@qccareerschool/helper-functions';

import { useFetchImproved } from '../../hooks/useFetchImproved';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';
import { ucWords } from '../../lib/ucWords';

type Province = { code: string; name: string }

const getUrl = (countryCode: string) => `https://api.qccareerschool.com/geoLocation/provinces/?countryCode=${encodeURIComponent(countryCode)}`;

export const ProvinceCode: React.FC = () => {
  const { address: { countryCode, provinceCode }, enrollmentErrors } = useStateContext();
  const dispatch = useDispatchContext();

  const [ provinces, setProvinces ] = useState<Province[]>([]);

  const [ fetchedProvinces, refetch, isLoading ] = useFetchImproved<Province[]>(getUrl(countryCode), provinces);

  // fetch a new list of provinces when the country changes
  useEffect(() => {
    if (needsProvince(countryCode)) {
      refetch(getUrl(countryCode));
    }
  }, [ refetch, countryCode ]);

  // update the provinces state when fetch a new list
  useLayoutEffect(() => {
    if (needsProvince(countryCode)) {
      setProvinces(fetchedProvinces);
    } else {
      setProvinces([]);
    }
  }, [ dispatch, countryCode, fetchedProvinces ]);

  // if we don't have a valid province, set it to an acceptable value
  useLayoutEffect(() => {
    if (provinceCode !== null || provinces.length) {
      if (!provinces.some(p => p.code === provinceCode)) {
        if (provinces.length) {
          dispatch({ type: 'SET_PROVINCE_CODE', payload: { provinceCode: provinces[0].code, manual: false } });
        } else {
          dispatch({ type: 'SET_PROVINCE_CODE', payload: { provinceCode: null, manual: false } });
        }
      }
    }
  }, [ dispatch, provinceCode, provinces ]);

  const change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SET_PROVINCE_CODE', payload: { provinceCode: e.target.value || null, manual: true } });
  };

  return (
    <div className="form-group">
      <label htmlFor="address-province-code">{ucWords(provinceState(countryCode))}</label>
      <select
        id="address-province-code"
        className={'form-control' + (enrollmentErrors.provinceCode ? ' is-invalid' : '')}
        onChange={change}
        value={provinceCode ?? ''}
        autoComplete="address-level1"
      >
        <option value="">---</option>
        {!isLoading && provinces.map(p => <option key={p.code} value={p.code}>{p.name}</option>)}
      </select>
    </div>
  );
};
