/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { DynamicMessage20211101 } from './2021/11/01/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
};

export const DynamicMessage: React.FC<Props> = ({ date, courses }) => {
  return <DynamicMessage20211101 courses={courses} />;
};
