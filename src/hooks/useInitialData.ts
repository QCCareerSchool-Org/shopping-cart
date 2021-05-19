import qs from 'qs';
import { useEffect } from 'react';

import { useDispatchContext } from './useDispatchContext';

export const useInitialData = (internal: boolean): void => {
  const dispatch = useDispatchContext();

  useEffect(() => {
    const loadQueryStringData = (): void => {
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
      if (parsed.promoCode) {
        if (Array.isArray(parsed.promoCode)) {
          const promoCode = parsed.promoCode[0];
          if (typeof promoCode === 'string') {
            dispatch({ type: 'SET_PROMO_CODE', payload: promoCode });
          }
        } else if (typeof parsed.promoCode === 'string') {
          dispatch({ type: 'SET_PROMO_CODE', payload: parsed.promoCode });
        }
      }
      if (parsed.plan) {
        if (typeof parsed.plan === 'string') {
          if (parsed.plan === 'full' || parsed.plan === 'part') {
            dispatch({ type: 'SET_PAYMENT_PLAN', payload: parsed.plan });
          }
        }
      }
    };

    const loadSessionStorageData = (): void => {
      if (window.sessionStorage) {
        const storedData = window.sessionStorage.getItem('form');
        if (storedData === null) {
          return;
        }

        try {
          const form = JSON.parse(storedData);

          // country, province
          if (form.countryCode) {
            dispatch({ type: 'SET_COUNTRY_CODE', payload: { countryCode: form.countryCode, provinceCode: form.provinceCode, manual: true } });
          }

          // first name
          if (form.firstName) {
            dispatch({ type: 'SET_FIRST_NAME', payload: form.firstName });
          }

          // last name
          if (form.lastName) {
            dispatch({ type: 'SET_LAST_NAME', payload: form.lastName });
          }

          // email address
          if (form.emailAddress) {
            dispatch({ type: 'SET_EMAIL_ADDRESS', payload: form.emailAddress });
          }

          // telephone number
          if (form.telephoneNumber) {
            dispatch({ type: 'SET_TELEPHONE_NUMBER', payload: form.telephoneNumber });
          }

          // address first line
          if (form.address1) {
            dispatch({ type: 'SET_ADDRESS1', payload: form.address1 });
          }

          // address first line
          if (form.address2) {
            dispatch({ type: 'SET_ADDRESS2', payload: form.address2 });
          }

          // city
          if (form.city) {
            dispatch({ type: 'SET_CITY', payload: form.city });
          }

          // postal code
          if (form.postalCode) {
            dispatch({ type: 'SET_POSTAL_CODE', payload: form.postalCode });
          }

          if (form.courses && Array.isArray(form.courses)) {
            dispatch({ type: 'CLEAR_COURSES', payload: { internal } });
            form.courses.forEach((c: unknown) => {
              if (typeof c === 'string') {
                dispatch({ type: 'ADD_COURSE', payload: { courseCode: c, internal } });
              }
            });
          }
        } catch (err) { /* */ }
      }
    };

    dispatch({ type: 'CLEAR_COURSES', payload: { internal } });
    loadSessionStorageData();
    loadQueryStringData();
  }, [ dispatch, internal ]);
};
