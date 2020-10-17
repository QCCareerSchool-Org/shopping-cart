import React, { useEffect } from 'react';

import { useFormState } from '../hooks/useFormState';
import { useFormDispatch } from '../hooks/useFormDispatch';
import { useFetchImproved } from '../hooks/useFetchImproved';
import { AddressForm } from './AddressForm';
import { Summary } from './Summary';
import { CourseSelection } from './CourseSelection';

type GeoLocation = {
  countryCode: string;
  provinceCode: string | null;
}

export const Form: React.FC = () => {
  const { address: { countryCode, provinceCode } } = useFormState();
  const dispatch = useFormDispatch();

  const geoLocationUrl = 'https://api.qccareerschool.com/geoLocation/ip';
  const [ geoLocation ] = useFetchImproved<GeoLocation>(geoLocationUrl, { countryCode, provinceCode });

  useEffect(() => {
    dispatch({ type: 'SET_COUNTRY_CODE', payload: { countryCode: geoLocation.countryCode, provinceCode: geoLocation.provinceCode ?? undefined } });
  }, [ dispatch, geoLocation.countryCode, geoLocation.provinceCode ]);

  return (
    <>
      <CourseSelection />
      <AddressForm />
      <Summary />
    </>
  );
};
