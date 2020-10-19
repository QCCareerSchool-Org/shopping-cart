import { useEffect } from 'react';
import qs from 'qs';

import { useDispatchContext } from './useDispatchContext';

export const useInitialData = (internal: boolean) => {
  const dispatch = useDispatchContext();

  useEffect(() => {
    const loadQueryStringData = () => {
      const parsed = qs.parse(window.location.search.slice(1));
      if (parsed.c) {
        if (Array.isArray(parsed.c)) {
          parsed.c.forEach((c: string | qs.ParsedQs) => {
            if (typeof c === 'string') {
              dispatch({ type: 'ADD_COURSE', payload: { courseCode: c, internal } });
            }
          });
        } else if (typeof parsed.c === 'string') {
          dispatch({ type: 'ADD_COURSE', payload: { courseCode: parsed.c, internal } });
        }
      }
    };

    const loadSessionStorageData = () => {
      if (window.sessionStorage) {
        // country, province
        const countryCode = window.sessionStorage.getItem('countryCode');
        const provinceCode = window.sessionStorage.getItem('provinceCode');
        if (countryCode) {
          dispatch({ type: 'SET_COUNTRY_CODE', payload: { countryCode, provinceCode: provinceCode ?? undefined, manual: true } });
        }

        // first name
        const firstName = window.sessionStorage.getItem('firstName');
        if (firstName) {
          dispatch({ type: 'SET_FIRST_NAME', payload: firstName });
        }

        // last name
        const lastName = window.sessionStorage.getItem('lastName');
        if (lastName) {
          dispatch({ type: 'SET_LAST_NAME', payload: lastName });
        }

        // address first line
        const address1 = window.sessionStorage.getItem('address1');
        if (address1) {
          // dispatch({ type: 'SET_ADDRESS1', payload: address1 });
        }
      }
    };

    loadSessionStorageData();
    loadQueryStringData();
  }, [ dispatch, internal ]);
};
