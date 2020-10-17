import { useEffect, useState } from 'react';
import axios from 'axios';

export function useFetch<T>(initialUrl: string, initialData: T): readonly [T, React.Dispatch<React.SetStateAction<string>>, boolean, boolean] {
  const [ url, setUrl ] = useState(initialUrl);
  const [ data, setData ] = useState<T>(initialData);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isError, setIsError ] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<T>(url);
        if (!cancelled) {
          setData(response.data);
        }
      } catch (err) {
        if (!cancelled) {
          setIsError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => { cancelled = true; };
  }, [ url ]);

  return [ data, setUrl, isLoading, isError ] as const;
}
