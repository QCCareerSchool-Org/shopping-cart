import { useEffect } from 'react';

export const usePreloadImage = (src: string) => {
  useEffect(() => {
    const img = new Image();
    img.src = src;
  }, [ src ]);
};
