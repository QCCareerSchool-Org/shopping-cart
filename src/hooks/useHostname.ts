import { useEffect, useState } from 'react';

/**
 * Returns the current window.location.hostname
 */
export const useHostname = (): string => {
  const [ hostname, setHostname ] = useState(window.location.hostname);

  useEffect(() => {
    const eventListener = (): void => {
      setHostname(window.location.hostname);
    };
    window.addEventListener('popstate', eventListener);
    return () => window.removeEventListener('popstate', eventListener);
  }, []);

  return hostname;
};
