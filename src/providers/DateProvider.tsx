import React, { useEffect, useState } from 'react';
import { useFetchImproved } from '../hooks/useFetchImproved';

export const DateContext = React.createContext<Date | undefined>(undefined);

export const DateProvider: React.FC = ({ children }) => {
  const [ date, setDate ] = useState<Date>();

  const url = 'https://api.qccareerschool.com/hoursOfOperation/now';
  const [ fetchedDate ] = useFetchImproved(url, new Date());

  useEffect(() => {
    setDate(fetchedDate);
  }, [ fetchedDate ]);

  return (
    <DateContext.Provider value={date}>
      {children}
    </DateContext.Provider>
  );
};
