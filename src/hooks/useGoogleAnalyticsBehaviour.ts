import { useChangedValue } from './useChangedValue';
import { useStateContext } from './useStateContext';

/**
 * Logs shopping behaviour with Google Analytics
 */
export const useGoogleAnalyticsBehaviour = () => {
  const state = useStateContext();

  // log changes to the course selections
  useChangedValue(state.courses, (current, previous) => {
    if (current.selected.length > previous.selected.length) { // user added a course
      //
    } else { // user removed a course
      //
    }
  });
};
