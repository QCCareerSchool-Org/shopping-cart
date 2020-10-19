import axios from 'axios';
import { useEffect } from 'react';
import qs from 'qs';

import { State } from '../state';
import { PriceQuery, PriceResult } from '../state/price';
import { useDispatchContext } from './useDispatchContext';
import { useStateContext } from './useStateContext';

export const getParams = (state: State): PriceQuery => ({
  courses: state.courses.selected,
  countryCode: state.address.countryCode,
  provinceCode: state.address.provinceCode ?? undefined,
  options: {
    discountAll: state.meta.student,
  },
});

export const usePriceUpdater = () => {
  const state = useStateContext();
  const dispatch = useDispatchContext();

  // update the prices when the country, province, or courses change
  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const url = 'https://api.qccareerschool.com/prices';
        const response = await axios.get<PriceResult>(url, {
          headers: { 'X-API-Version': 2 },
          params: getParams(state),
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
  }, [ dispatch, state.courses, state.address.countryCode, state.address.provinceCode, state.meta.student ]);
};
