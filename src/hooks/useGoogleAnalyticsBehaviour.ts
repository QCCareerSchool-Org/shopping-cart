import { useChangedValue } from './useChangedValue';
import { useStateContext } from './useStateContext';

declare global {
  interface Window {
    gtag: (...T: any[]) => void;
  }
}

/**
 * Logs shopping behaviour with Google Analytics
 */
export const useGoogleAnalyticsBehaviour = () => {
  const state = useStateContext();

  // log changes to the course selections
  useChangedValue(state.courses, (current, previous) => {
    if (current.selected.length > previous.selected.length) { // user added a course
      const addedCourses = current.selected.filter(el => !previous.selected.includes(el));
      // Google Analytics event
      if (typeof window.gtag !== 'undefined') {
        const items = addedCourses.map(c => ({ id: c, quantity: 1 }));
        window.gtag('event', 'add_to_cart', { items });
      }
    } else { // user removed a course
      const removedCourses = previous.selected.filter(el => !current.selected.includes(el));
      // Google Analytics event
      if (typeof window.gtag !== 'undefined') {
        const items = removedCourses.map(c => ({ id: c, quantity: 1 }));
        window.gtag('event', 'remove_from_cart', { items });
      }
    }
  });
};
