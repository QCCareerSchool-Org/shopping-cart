import { useContext } from 'react';

import { DateContext } from '../providers/DateProvider';

export const useDateContext = (): Date => {
  const context = useContext(DateContext);
  if (context === undefined) {
    throw Error('useDateContext must be used within a DateProvider');
  }
  return context;
};
