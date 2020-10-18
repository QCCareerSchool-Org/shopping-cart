import { useState } from 'react';

export const usePopup = (initial: boolean): [ boolean, () => void ] => {
  const [ popup, setPopup ] = useState(initial);
  const togglePopup = () => {
    setPopup(!popup);
  };
  return [ popup, togglePopup ];
};
