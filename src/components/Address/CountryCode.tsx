import React from 'react';
import { useFetchImproved } from '../../hooks/useFetchImproved';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';

type Country = {
  code: string;
  name: string;
}

const url = 'https://api.qccareerschool.com/geoLocation/countries';

export const CountryCode: React.FC = () => {
  const { address: { countryCode } } = useStateContext();
  const dispatch = useDispatchContext();

  const [ countries, , isLoading ] = useFetchImproved<Country[]>(url, []);

  const change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    dispatch({ type: 'SET_COUNTRY_CODE', payload: { countryCode: value } });
  };

  return (
    <div className="form-group">
      <label htmlFor="address-country-code">Country</label>
      <select
        id="address-country-code"
        className="form-control"
        onChange={change}
        value={countryCode}
      >
        {isLoading
          ? <option value="">---</option>
          : countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)
        }
      </select>
    </div>
  );
};
