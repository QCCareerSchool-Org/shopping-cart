import { useEffect } from 'react';
import { useDispatchContext } from './useDispatchContext';
import { useFetchImproved } from './useFetchImproved';
import { useStateContext } from './useStateContext';

export type GeoLocation = {
  countryCode: string;
  provinceCode: string | null;
}

export const useGeoLocation = (): void => {
  const { address } = useStateContext();
  const dispatch = useDispatchContext();

  // determine the visitor's geo location by ip address
  const geoLocationUrl = 'https://api.qccareerschool.com/geoLocation/ip';
  const [ geoLocation ] = useFetchImproved<GeoLocation|undefined>(geoLocationUrl, undefined);

  useEffect(() => {
    if (geoLocation !== undefined) {
      if (!address.locationModified) { // don't change the country if it's already been changed by the user
        dispatch({ type: 'SET_COUNTRY_CODE', payload: { countryCode: geoLocation.countryCode, provinceCode: geoLocation.provinceCode ?? undefined, manual: false } });
      }
    }
  }, [ dispatch, geoLocation, address.locationModified ]);

  return;
};
