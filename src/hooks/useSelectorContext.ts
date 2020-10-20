import { useContext } from 'react';
import { SelectorContext, Callback } from '../providers/StateProvider';

export function useSelectorContext<T>(callback: Callback<T>): T {
  const context = useContext(SelectorContext);
  if (context === undefined) {
    throw Error('useSelectorContext must be used within a StateProvider');
  }
  return context(callback);
}
