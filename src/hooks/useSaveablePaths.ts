import { useEffect } from 'react';

/**
 * Saves the current window.location.pathname in localStorage if the current pathname is one of the designated pathnames
 * to save. Redirects the visitor to the saved pathname if the visitor has a pathname saved is the visitor's current pathname is /
 * @param saveablePaths the pathnames that should be saved
 */
export const useSaveablePaths = (saveablePaths: RegExp[]): void => {

  useEffect(() => {
    if (navigator.cookieEnabled && window.localStorage) {
      if (saveablePaths.some(path => path.test(window.location.pathname))) {
        window.localStorage.setItem('pathname', window.location.pathname);
        const days = 7;
        const millisecondsPerDay = 86_400_000;
        window.localStorage.setItem('pathnameExpiry', (new Date().getTime() + (days * millisecondsPerDay)).toString());
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
