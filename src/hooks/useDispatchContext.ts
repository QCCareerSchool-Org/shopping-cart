import { useContext } from 'react';

import { DispatchContext } from '../providers/StateProvider';
import { Action } from '../state';

export const useDispatchContext = (): React.Dispatch<Action> => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw Error('useDispatchContext must be used within a StateProvider');
  }
  return context;
};
