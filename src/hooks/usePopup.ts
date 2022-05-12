import { useCallback, useState } from 'react';

export const usePopup = (initial: boolean): [ popup: boolean, toggle: () => void ] => {
  const [ popup, setPopup ] = useState(initial);
  const togglePopup = useCallback((): void => {
    setPopup(p => !p);
  }, []);
  return [ popup, togglePopup ];
};
