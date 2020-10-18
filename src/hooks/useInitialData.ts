import { useEffect } from 'react';
import qs from 'qs';

import { useDispatchContext } from './useDispatchContext';

export const useInitialData = () => {
  const dispatch = useDispatchContext();

  const loadCourses = () => {
    const parsed = qs.parse(window.location.search.slice(1));
    if (parsed.c) {
      if (Array.isArray(parsed.c)) {
        parsed.c.forEach((c: string | qs.ParsedQs) => {
          if (typeof c === 'string') {
            dispatch({ type: 'ADD_COURSE', payload: c });
          }
        });
      } else if (typeof parsed.c === 'string') {
        dispatch({ type: 'ADD_COURSE', payload: parsed.c });
      }
    }
  };

  const loadSavedData = () => {
    if (window.sessionStorage) {
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

  useEffect(() => {
    loadCourses();
    loadSavedData();
  }, []);
};
