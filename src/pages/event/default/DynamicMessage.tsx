import React from 'react';

import { DynamicMessage20210601 } from './2021/06/01/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
};

export const DynamicMessage: React.FC<Props> = ({ courses }) => {
  return <DynamicMessage20210601 courses={courses} />;
};
