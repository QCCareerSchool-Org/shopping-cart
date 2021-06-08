import React from 'react';

import { DynamicMessage20210601 } from './2021/06/01/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
};

export const DynamicMessage: React.FC<Props> = ({ date, courses }) => {
  if (date.getTime() >= Date.UTC(2021, 5, 9, 13)) {
    return null;
  }
  return <DynamicMessage20210601 courses={courses} />;
};
