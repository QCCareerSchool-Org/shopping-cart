import axios from 'axios';
import qs from 'qs';
import { useEffect } from 'react';

import { School } from '../lib/enrollment';
import { PriceQuery, PriceResult } from '../state/price';
import { useDispatchContext } from './useDispatchContext';
import { useStateContext } from './useStateContext';

export const usePriceUpdater = (school: School, promoCodeDefault?: string, additionalOptions?: any) => {
  const { courses, address, payment, meta } = useStateContext();
  const dispatch = useDispatchContext();

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
          noShipping: payment.noShipping,
          school,
          promoCode: promoCodeDefault ?? meta.promoCode,
          ...additionalOptions,
        },
      };
      try {
        const url = 'https://api.qccareerschool.com/prices';
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
  }, [ dispatch, courses, address.countryCode, address.provinceCode, meta.student, meta.studentDiscount, meta.promoCode, payment.noShipping, school, additionalOptions ]);
};
