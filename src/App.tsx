import React from 'react';
import { Form } from './components/Form';
import { StateProvider } from './providers/StateProvider';

export const App: React.FC = () => {
  return (
    <StateProvider>
      <Form student={false} />
    </StateProvider>
  );
};
