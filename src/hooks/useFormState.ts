import { useContext } from 'react';
import { FormStateContext } from '../providers/FormProvider';
import { FormState } from './useFormReducer';

export const useFormState = (): FormState => {
  const context  = useContext(FormStateContext);
  if (context === undefined) {
    throw Error('useFormState must be used within a FormProvider');
  }
  return context;
};
