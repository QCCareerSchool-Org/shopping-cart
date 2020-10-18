import axios from 'axios';
import { useEffect } from 'react';

import { getSelectedCourses } from '../state/courses';
import { PriceQuery, PriceResult } from '../state/price';
import { useDispatchContext } from './useDispatchContext';
import { useStateContext } from './useStateContext';

export const usePriceUpdater = () => {
  const { address, courses } = useStateContext();
  const dispatch = useDispatchContext();

  // update the prices when the country, province, or courses change
  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const fetchData = async () => {
      const params: PriceQuery = {
        courses: getSelectedCourses(courses),
        countryCode: address.countryCode,
        provinceCode: address.provinceCode ?? undefined,
      };
      try {
        const url = 'https://api.qccareerschool.com/prices';
        const response = await axios.get<PriceResult>(url, {
          headers: { 'X-API-Version': 2 },
          params,
        });
        dispatch({ type: 'SET_PRICE', payload: response.data });
      } catch (err) {
        //
      }
    };

    fetchData();

    return () => cancelTokenSource.cancel();
  }, [ courses, address.countryCode, address.provinceCode ]);
};
