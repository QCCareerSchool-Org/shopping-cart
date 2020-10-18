import { useContext } from 'react';

import { ScreenWidthContext } from '../providers/ScreenWidthProvider';

export const useScreenWidthContext = (): number => {
  const context = useContext(ScreenWidthContext);
  if (context === undefined) {
    throw Error('useScreenWidth must be used within a ScreenWidthProvider');
  }
  return context;
};
