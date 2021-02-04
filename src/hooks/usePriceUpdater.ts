import axios from 'axios';
import qs from 'qs';
import { useEffect } from 'react';

import { PriceQuery, PriceResult } from '../state/price';
import { useDispatchContext } from './useDispatchContext';
import { useStateContext } from './useStateContext';

export const usePriceUpdater = (additionalOptions?: any) => {
  const state = useStateContext();
  const dispatch = useDispatchContext();

  // update the prices when the country, province, or courses change
  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const fetchData = async () => {
      const params: PriceQuery = {
        courses: state.courses.selected,
        countryCode: state.address.countryCode,
        provinceCode: state.address.provinceCode ?? undefined,
        options: {
          discountAll: state.meta.student,
          noShipping: state.payment.noShipping,
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
  }, [ dispatch, state.courses, state.address.countryCode, state.address.provinceCode, state.meta.student, state.meta.studentDiscount, state.payment.noShipping, additionalOptions ]);
};
