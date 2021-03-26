import React from 'react';

import { DynamicMessage20210315 } from './2021/03/15/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
}

export const DynamicMessage: React.FC<Props> = ({ date, courses }) => {
  return <DynamicMessage20210315 courses={courses} />;
};
