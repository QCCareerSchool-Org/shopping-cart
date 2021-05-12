/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { DynamicMessage20210406 } from './2021/04/06/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
};

export const DynamicMessage: React.FC<Props> = ({ courses }) => {
  return <DynamicMessage20210406 courses={courses} />;
};
