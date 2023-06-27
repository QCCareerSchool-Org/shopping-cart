import qs from 'qs';
import { useEffect } from 'react';

import { Country } from '../state/countries';
import { useDispatchContext } from './useDispatchContext';

export const useInitialData = (internal: boolean, paymentOptionsReverse: boolean): void => {
  const dispatch = useDispatchContext();

  useEffect(() => {
    const loadQueryStringData = (): void => {
      const parsed = qs.parse(window.location.search.slice(1));

      // country, province
      if (typeof parsed.countryCode === 'string') {
        if (typeof parsed.provinceCode === 'string') {
          dispatch({ type: 'SET_COUNTRY_CODE', payload: { countryCode: parsed.countryCode, provinceCode: parsed.provinceCode, manual: true } });
        } else {
          dispatch({ type: 'SET_COUNTRY_CODE', payload: { countryCode: parsed.countryCode, provinceCode: undefined, manual: true } });
        }
      }

      // sex
      if (typeof parsed.sex === 'string') {
        dispatch({ type: 'SET_TITLE', payload: parsed.sex === 'M' ? 'Mr.' : 'Mrs.' });
      }

      // first name
      if (typeof parsed.firstName === 'string') {
        dispatch({ type: 'SET_FIRST_NAME', payload: parsed.firstName });
      }

      // last name
      if (typeof parsed.lastName === 'string') {
        dispatch({ type: 'SET_LAST_NAME', payload: parsed.lastName });
      }

      // email address
      if (typeof parsed.emailAddress === 'string') {
        dispatch({ type: 'SET_EMAIL_ADDRESS', payload: parsed.emailAddress });
      }

      // telephone number
      if (typeof parsed.telephoneNumber === 'string') {
        dispatch({ type: 'SET_TELEPHONE_NUMBER', payload: parsed.telephoneNumber });
      }

      // address first line
      if (typeof parsed.address1 === 'string') {
        dispatch({ type: 'SET_ADDRESS1', payload: parsed.address1 });
      }

      // address first line
      if (typeof parsed.address2 === 'string') {
        dispatch({ type: 'SET_ADDRESS2', payload: parsed.address2 });
      }

      // city
      if (typeof parsed.city === 'string') {
        dispatch({ type: 'SET_CITY', payload: parsed.city });
      }

      // postal code
      if (typeof parsed.postalCode === 'string') {
        dispatch({ type: 'SET_POSTAL_CODE', payload: parsed.postalCode });
      }

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
      let planFound = false;
      if (parsed.plan) {
        if (typeof parsed.plan === 'string') {
          if (parsed.plan === 'full' || parsed.plan === 'part') {
            planFound = true;
            dispatch({ type: 'SET_PAYMENT_PLAN', payload: parsed.plan });
          }
        }
      }
      if (!planFound) {
        dispatch({ type: 'SET_PAYMENT_PLAN', payload: paymentOptionsReverse ? 'part' : 'full' });
      }
    };

    const loadSessionStorageData = (): void => {
      if (navigator.cookieEnabled && window.sessionStorage) {
        try {
          const storedData = window.sessionStorage.getItem('form');
          if (storedData === null) {
            return;
          }

          const form: unknown = JSON.parse(storedData);

          if (typeof form !== 'object' || form === null) {
            window.sessionStorage.removeItem('form');
            return;
          }

          const studentAddress = 'studentAddress' in form && typeof form.studentAddress === 'object' && form.studentAddress !== null
            ? form.studentAddress // new way
            : form; // old way of storing data

          // country, province
          if ('countryCode' in studentAddress && typeof studentAddress.countryCode === 'string') {
            if ('provinceCode' in studentAddress && typeof studentAddress.provinceCode === 'string') {
              dispatch({ type: 'SET_COUNTRY_CODE', payload: { countryCode: studentAddress.countryCode, provinceCode: studentAddress.provinceCode, manual: true } });
            } else {
              dispatch({ type: 'SET_COUNTRY_CODE', payload: { countryCode: studentAddress.countryCode, provinceCode: undefined, manual: true } });
            }
          }

          // first name
          if ('firstName' in studentAddress && typeof studentAddress.firstName === 'string') {
            dispatch({ type: 'SET_FIRST_NAME', payload: studentAddress.firstName });
          }

          // last name
          if ('lastName' in studentAddress && typeof studentAddress.lastName === 'string') {
            dispatch({ type: 'SET_LAST_NAME', payload: studentAddress.lastName });
          }

          // email address
          if ('emailAddress' in studentAddress && typeof studentAddress.emailAddress === 'string') {
            dispatch({ type: 'SET_EMAIL_ADDRESS', payload: studentAddress.emailAddress });
          }

          // telephone number
          if ('telephoneNumber' in studentAddress && typeof studentAddress.telephoneNumber === 'string') {
            dispatch({ type: 'SET_TELEPHONE_NUMBER', payload: studentAddress.telephoneNumber });
          }

          // address first line
          if ('address1' in studentAddress && typeof studentAddress.address1 === 'string') {
            dispatch({ type: 'SET_ADDRESS1', payload: studentAddress.address1 });
          }

          // address first line
          if ('address2' in studentAddress && typeof studentAddress.address2 === 'string') {
            dispatch({ type: 'SET_ADDRESS2', payload: studentAddress.address2 });
          }

          // city
          if ('city' in studentAddress && typeof studentAddress.city === 'string') {
            dispatch({ type: 'SET_CITY', payload: studentAddress.city });
          }

          // postal code
          if ('postalCode' in studentAddress && typeof studentAddress.postalCode === 'string') {
            dispatch({ type: 'SET_POSTAL_CODE', payload: studentAddress.postalCode });
          }

          if ('courses' in form && Array.isArray(form.courses)) {
            dispatch({ type: 'CLEAR_COURSES', payload: { internal } });
            for (const c of form.courses) {
              if (typeof c === 'string') {
                dispatch({ type: 'ADD_COURSE', payload: { courseCode: c, internal } });
              }
            }
          }

          if ('billingAddress' in form && typeof form.billingAddress === 'object' && form.billingAddress !== null) {
            const billingAddress = form.billingAddress;

            if ('sameAsShipping' in billingAddress && typeof billingAddress.sameAsShipping === 'boolean') {
              dispatch({ type: 'SET_BILLING_DISABLED', payload: billingAddress.sameAsShipping });
            }

            // country, province
            if ('countryCode' in billingAddress && typeof billingAddress.countryCode === 'string') {
              if ('provinceCode' in billingAddress && typeof billingAddress.provinceCode === 'string') {
                dispatch({ type: 'SET_BILLING_COUNTRY_CODE', payload: { countryCode: billingAddress.countryCode, provinceCode: billingAddress.provinceCode, manual: true } });
              } else {
                dispatch({ type: 'SET_BILLING_COUNTRY_CODE', payload: { countryCode: billingAddress.countryCode, provinceCode: undefined, manual: true } });
              }
            }

            // first name
            if ('firstName' in billingAddress && typeof billingAddress.firstName === 'string') {
              dispatch({ type: 'SET_BILLING_FIRST_NAME', payload: billingAddress.firstName });
            }

            // last name
            if ('lastName' in billingAddress && typeof billingAddress.lastName === 'string') {
              dispatch({ type: 'SET_BILLING_LAST_NAME', payload: billingAddress.lastName });
            }

            // email address
            if ('emailAddress' in billingAddress && typeof billingAddress.emailAddress === 'string') {
              dispatch({ type: 'SET_BILLING_EMAIL_ADDRESS', payload: billingAddress.emailAddress });
            }

            // telephone number
            if ('telephoneNumber' in billingAddress && typeof billingAddress.telephoneNumber === 'string') {
              dispatch({ type: 'SET_BILLING_TELEPHONE_NUMBER', payload: billingAddress.telephoneNumber });
            }

            // address first line
            if ('address1' in billingAddress && typeof billingAddress.address1 === 'string') {
              dispatch({ type: 'SET_BILLING_ADDRESS1', payload: billingAddress.address1 });
            }

            // address first line
            if ('address2' in billingAddress && typeof billingAddress.address2 === 'string') {
              dispatch({ type: 'SET_BILLING_ADDRESS2', payload: billingAddress.address2 });
            }

            // city
            if ('city' in billingAddress && typeof billingAddress.city === 'string') {
              dispatch({ type: 'SET_BILLING_CITY', payload: billingAddress.city });
            }

            // postal code
            if ('postalCode' in billingAddress && typeof billingAddress.postalCode === 'string') {
              dispatch({ type: 'SET_BILLING_POSTAL_CODE', payload: billingAddress.postalCode });
            }
          }

        } catch (err) {
          window.sessionStorage.removeItem('form');
        }
      }
    };

    getCountries().then(countries => {
      dispatch({ type: 'SET_COUNTRIES', payload: countries });
      dispatch({ type: 'CLEAR_COURSES', payload: { internal } });
      loadSessionStorageData();
      loadQueryStringData();
    }).catch(console.error);
  }, [ dispatch, internal, paymentOptionsReverse ]);
};

const getCountries = async (): Promise<Country[]> => {
  const url = 'https://api.qccareerschool.com/geoLocation/countries';
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  return [];
};
