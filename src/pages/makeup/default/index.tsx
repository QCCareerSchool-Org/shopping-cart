import React from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from './DefaultPromo';

export const Default: React.FC = () => (
  <>
    <DefaultPromo />
    <Form
      courseGroups={courseGroups}
      guarantee={() => <Guarantee />}
    />
  </>
);
