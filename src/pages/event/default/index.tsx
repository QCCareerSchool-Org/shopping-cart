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
      school="QC Event School"
      guarantee={() => <Guarantee />}
      allowNoShipping={true}
    />
  </>
);
