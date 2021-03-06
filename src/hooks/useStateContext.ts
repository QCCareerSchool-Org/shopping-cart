import { useContext } from 'react';
import { StateContext } from '../providers/StateProvider';
import { State } from '../state';

export const useStateContext = (): State => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw Error('useStateContext must be used within a StateProvider');
  }
  return context;
};
