import React, { useEffect, useState } from 'react';

export const ScreenWidthContext = React.createContext<number>(0);

export const ScreenWidthProvider: React.FC = ({ children }) => {
  const [ screenWidth, setScreenWidth ] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const resizeListener = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <ScreenWidthContext.Provider value={screenWidth}>
      {children}
    </ScreenWidthContext.Provider>
  );
};
