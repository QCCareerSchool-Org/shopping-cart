import React, { FC } from 'react';

import { BuyOneGetOneText } from '../../components/BuyOneGetOneText';
import { FirstAidIncluded } from './FirstAidIncluded';

export const PetCoursesSubtitle: FC = () => (
  <div className="mb-4" style={{ marginTop: '-0.75rem' }}>
    <div className="mb-2"><BuyOneGetOneText /></div>
    <FirstAidIncluded />
  </div>
);
