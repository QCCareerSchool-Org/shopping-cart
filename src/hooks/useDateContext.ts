import { useContext } from 'react';

import { DateContext } from '../providers/DateProvider';

export const useDate = (): Date => {
  const context = useContext(DateContext);
  if (context === undefined) {
    throw Error('useDate must be used within a DateProvider');
  }
  return context;
};
