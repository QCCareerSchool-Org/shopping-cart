import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';

type State<T> = {
  data: T;
  isLoading: boolean;
  isError: boolean;
};

type Action<T> =
  | { type: 'FETCH_INIT' }
  | { type: 'FETCH_SUCCESS'; payload: T }
  | { type: 'FETCH_FAILURE' }
  | { type: 'OVERRIDE'; payload: T };

function reducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'OVERRIDE':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    default:
      throw Error();
  }
}

type ReturnType<T> = readonly [T, React.Dispatch<React.SetStateAction<string>>, boolean, boolean];

export function useFetchImproved<T>(initialUrl: string, initialData: T): ReturnType<T> {

  const initialState: State<T> = {
    data: initialData,
    isLoading: false,
    isError: false,
  };

  const [ url, setUrl ] = useState(initialUrl);
  const [ state, dispatch ] = useReducer<(s: State<T>, a: Action<T>) => State<T>>(reducer, initialState);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();

    const fetchData = async (): Promise<void> => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const response = await axios.get<T>(url, { cancelToken: cancelTokenSource.token });
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAILURE' });
      }
    };

    fetchData();

    return () => cancelTokenSource.cancel();
  }, [ url ]);

  const { data, isLoading, isError } = state;
  return [ data, setUrl, isLoading, isError ] as const;
}
