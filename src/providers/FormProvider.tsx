import React from 'react';

import { useFormReducer, FormState, FormAction } from '../hooks/useFormReducer';

export const FormStateContext = React.createContext<FormState | undefined>(undefined);
export const FormDispatchContext = React.createContext<React.Dispatch<FormAction> | undefined>(undefined);

export const FormProvider: React.FC = ({ children }) => {
  const [ state, dispatch ] = useFormReducer();
  return (
    <FormStateContext.Provider value={state}>
      <FormDispatchContext.Provider value={dispatch}>
       {children}
     </FormDispatchContext.Provider>
    </FormStateContext.Provider>
  );
};
