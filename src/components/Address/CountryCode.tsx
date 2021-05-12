import React from 'react';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useFetchImproved } from '../../hooks/useFetchImproved';
import { useStateContext } from '../../hooks/useStateContext';

type Country = {
  code: string;
  name: string;
};

const url = 'https://api.qccareerschool.com/geoLocation/countries';

const defaultCountries: Country[] = [
  { code: 'AU', name: 'Australia' },
  { code: 'CA', name: 'Canada' },
  { code: 'NZ', name: 'New Zealand' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'US', name: 'United States' },
];

export const CountryCode: React.FC = () => {
  const { address: { countryCode }, enrollmentErrors } = useStateContext();
  const dispatch = useDispatchContext();

  const [ countries, , isLoading ] = useFetchImproved<Country[]>(url, []);

  const change = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    // we have to strip the leading "_" on values that are three characters long
    const codeLength = 3;
    const value = e.target.value.length === codeLength ? e.target.value.slice(1) : e.target.value;
    dispatch({ type: 'SET_COUNTRY_CODE', payload: { countryCode: value, manual: true } });
  };

  // the value attribute of the "default country" options is prefixed with "_" so that we don't end up with the same value more than once
  return (
    <div className="form-group">
      <label htmlFor="address-country-code">Country</label>
      <select
        id="address-country-code"
        className={'form-control' + (enrollmentErrors.countryCode ? ' is-invalid' : '')}
        onChange={change}
        value={countryCode}
        autoComplete="country"
      >
        {isLoading
          ? <option value="">---</option>
          : (
            <>
              {defaultCountries.map(c => <option key={c.code} value={`_${c.code}`}>{c.name}</option>)}
              <option value="">---</option>
              {countries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
            </>
          )
        }
      </select>
    </div>
  );
};
