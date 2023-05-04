import React, { FC } from 'react';

import Check from '../../../images/check.svg';

export const Checkmark: FC = () => (
  <img src={Check} style={{ height: 18, position: 'relative', top: -2 }} alt="✓" />
);
