import { useEffect } from 'react';
import { useDispatchContext } from './useDispatchContext';
import { useFetchImproved } from './useFetchImproved';

export type GeoLocation = {
  countryCode: string;
  provinceCode: string | null;
}

export const useGeoLocation = (): void => {
  const dispatch = useDispatchContext();

  // determine the visitor's geo location by ip address
  const geoLocationUrl = 'https://api.qccareerschool.com/geoLocation/ip';
  const [ geoLocation ] = useFetchImproved<GeoLocation|undefined>(geoLocationUrl, undefined);

  useEffect(() => {
    if (geoLocation !== undefined) {
      dispatch({ type: 'SET_COUNTRY_CODE', payload: { countryCode: geoLocation.countryCode, provinceCode: geoLocation.provinceCode ?? undefined } });
    }
  }, [ dispatch, geoLocation ]);

  return;
};
