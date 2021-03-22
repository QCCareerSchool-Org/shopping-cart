import { useWindowSize } from '@qccareerschool/hooks';
import React from 'react';

export const ScreenWidthContext = React.createContext<number>(0);

export const ScreenWidthProvider: React.FC = ({ children }) => {
  const size = useWindowSize();

  return (
    <ScreenWidthContext.Provider value={size.width ?? 0}>
      {children}
    </ScreenWidthContext.Provider>
  );
};
