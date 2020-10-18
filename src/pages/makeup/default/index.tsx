import React from 'react';
import { Form } from '../../../components/Form';
import { DefaultPromo } from './DefaultPromo';

import { courseGroups } from '../courseGroups';

export const Default: React.FC = () => (
  <>
    <DefaultPromo />
    <Form
      student={false}
      courseGroups={courseGroups}
    />
  </>
);
