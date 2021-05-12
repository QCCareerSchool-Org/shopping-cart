import { useEffect } from 'react';

export const usePreloadImage = (src: string): void => {
  useEffect(() => {
    const img = new Image();
    img.src = src;
  }, [ src ]);
};
