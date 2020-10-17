import React from 'react';
import { Form } from './components/Form';
import { FormProvider } from './providers/FormProvider';

export const App: React.FC = () => {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  );
};
