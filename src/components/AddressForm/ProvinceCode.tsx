import React, { useEffect, useState } from 'react';
import { useFetchImproved } from '../../hooks/useFetchImproved';
import { useFormDispatch } from '../../hooks/useFormDispatch';
import { useFormState } from '../../hooks/useFormState';

type Province = { code: string; name: string }

const getUrl = (countryCode: string) => `https://api.qccareerschool.com/geoLocation/provinces/?countryCode=${encodeURIComponent(countryCode)}`;

const needsProvince = (countryCode: string) => [ 'CA', 'US', 'AU' ].includes(countryCode);

export const ProvinceCode: React.FC = () => {
  const { address: { countryCode, provinceCode } } = useFormState();
  const dispatch = useFormDispatch();

  const [ provinces, setProvinces ] = useState<Province[]>([]);

  const [ fetchedProvinces, refetch, isLoading ] = useFetchImproved<Province[]>(getUrl(countryCode), provinces);

  useEffect(() => {
    if (needsProvince(countryCode)) {
      refetch(getUrl(countryCode));
    }
  }, [ countryCode, refetch ]);

  useEffect(() => {
    if (needsProvince(countryCode)) {
      setProvinces(fetchedProvinces);
    } else {
      setProvinces([]);
    }
  }, [ countryCode, fetchedProvinces ]);

  const change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value || null;
    dispatch({ type: 'SET_PROVINCE_CODE', payload: value });
  };

  return (
    <div className="form-group">
      <label htmlFor="address-province-code">Province</label>
      <select
        id="address-province-code"
        className="form-control"
        onChange={change}
        value={provinceCode ?? ''}
      >
        {isLoading
          ? <option value="">Loading...</option>
          : (
            <>
              <option value="">---</option>
              {provinces.map(p => <option key={p.code} value={p.code}>{p.name}</option>)}
            </>
          )
        }
      </select>
    </div>
  );
};
