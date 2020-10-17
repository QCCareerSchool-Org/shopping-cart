import { useContext } from 'react';
import { FormDispatchContext } from '../providers/FormProvider';
import { FormAction } from './useFormReducer';

export const useFormDispatch = (): React.Dispatch<FormAction> => {
  const context = useContext(FormDispatchContext);
  if (context === undefined) {
    throw Error('useFormDispatch must be used within a FormProvider');
  }
  return context;
};
