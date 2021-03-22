import axios from 'axios';
import qs from 'qs';
import { useEffect } from 'react';

import { School } from '../lib/enrollment';
import { PriceQuery, PriceResult } from '../state/price';
import { useDispatchContext } from './useDispatchContext';
import { useStateContext } from './useStateContext';

export const usePriceUpdater = (school: School, promoCodeDefault?: string, allowOverrides?: boolean, additionalOptions?: any) => {
  const { courses, address, payment, overrides, meta } = useStateContext();
  const dispatch = useDispatchContext();

  // update the prices when the country, province, or courses change
  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const preFetchData = async () => {
      if (!allowOverrides) {
        return;
      }
      const params: PriceQuery = {
        courses: courses.selected,
        countryCode: address.countryCode,
        provinceCode: address.provinceCode ?? undefined,
        options: {
          discountAll: meta.student,
          noShipping: payment.noShipping,
          school,
          promoCode: promoCodeDefault ?? meta.promoCode,
          ...additionalOptions,
        },
      };
      const url = process.env.REACT_APP_PRICES_ENDPOINT ?? 'https://api.qccareerschool.com/prices';
      const response = await axios.get<PriceResult>(url, {
        headers: { 'X-API-Version': 2 },
        params,
        paramsSerializer: qs.stringify,
        cancelToken: cancelTokenSource.token,
      });
      dispatch({
        type: 'INITIALIZE_OVERRIDES',
        payload: {
          installments: Math.max(1, response.data.plans.part.originalInstallments),
          courses: response.data.courses.map(c => ({
            code: c.code,
            name: c.name,
            min: c.plans.part.originalDeposit,
            max: c.plans.part.total,
            default: c.plans.part.originalDeposit,
            value: c.plans.part.deposit,
          })),
        },
      });
    };

    preFetchData();

    return () => cancelTokenSource.cancel();
  }, [ dispatch, courses, address.countryCode, address.provinceCode, meta.student, meta.studentDiscount, meta.promoCode, payment.noShipping, school, promoCodeDefault, additionalOptions ]);

  // update the prices when the country, province, or courses change
  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const fetchData = async () => {
      const params: PriceQuery = {
        courses: courses.selected,
        countryCode: address.countryCode,
        provinceCode: address.provinceCode ?? undefined,
        options: {
          discountAll: meta.student,
          studentDiscount: meta.studentDiscount,
          noShipping: payment.noShipping,
          school,
          promoCode: promoCodeDefault ?? meta.promoCode,
          ...additionalOptions,
        },
      };

      if (allowOverrides) {
        params.options = {
          ...params.options,
          installmentsOverride: Math.max(1, overrides.installments),
          depositOverrides: overrides.courses.reduce((prev, cur) => {
            prev[cur.code] = cur.value;
            return prev;
          }, {} as any),
        };
      }

      try {
        const url = process.env.REACT_APP_PRICES_ENDPOINT ?? 'https://api.qccareerschool.com/prices';
        const response = await axios.get<PriceResult>(url, {
          headers: { 'X-API-Version': 2 },
          params,
          paramsSerializer: qs.stringify,
          cancelToken: cancelTokenSource.token,
        });
        dispatch({ type: 'SET_PRICE', payload: response.data });

      } catch (err) {
        //
      }
    };

    fetchData();

    return () => cancelTokenSource.cancel();
  }, [ dispatch, courses, address.countryCode, address.provinceCode, meta.student, meta.studentDiscount, meta.promoCode, payment.noShipping, overrides.installments, overrides.value, school, promoCodeDefault, additionalOptions ]);
};
