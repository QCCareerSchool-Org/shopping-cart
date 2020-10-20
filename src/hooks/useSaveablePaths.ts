import { useEffect } from 'react';

export const useSaveablePaths = (saveablePaths: RegExp[]) => {

  useEffect(() => {
    if (window.localStorage) {
      if (saveablePaths.some(path => path.test(window.location.pathname))) {
        window.localStorage.setItem('pathname', window.location.pathname);
        window.localStorage.setItem('pathnameExpiry', (new Date().getTime() + 1000 * 60 * 60 * 24 * 7).toString());
      } else if (window.location.pathname === '/') {
        const pathname = window.localStorage.getItem('pathname');
        const pathnameExpiry = window.localStorage.getItem('pathnameExpiry');
        if (pathname) {
          if (pathnameExpiry && parseInt(pathnameExpiry, 10) > new Date().getTime() && saveablePaths.some(path => path.test(pathname))) {
            window.location.replace(pathname + window.location.search + window.location.hash);
          } else {
            window.localStorage.removeItem('pathname');
            window.localStorage.removeItem('pathnameExpiry');
          }
        }
      }
    }
  }, [ saveablePaths ]);
};
