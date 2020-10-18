import { useContext } from 'react';
import { StateContext } from '../providers/StateProvider';
import { State } from '../state';

export const useStateContext = (): State => {
  const context  = useContext(StateContext);
  if (context === undefined) {
    throw Error('useFormState must be used within a FormProvider');
  }
  return context;
};
