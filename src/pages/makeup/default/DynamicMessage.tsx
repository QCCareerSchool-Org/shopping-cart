import React from 'react';
import { DynamicMessage20210313 } from './2021/03/13/DynamicMessage';
import { DynamicMessage20210315 } from './2021/03/15/DynamicMessage';

export interface Props {
  date: Date;
  courses: string[];
}

export const DynamicMessage: React.FC<Props> = ({ date, courses }) => {
  if (date >= new Date('2021-03-29T09:00:00-04:00')) {
    return null;
  } else if (date >= new Date('2021-03-15T09:00:00-04:00')) {
    return <DynamicMessage20210315 courses={courses} />;
  } else if (date >= new Date('2021-03-13T08:00:00-05:00')) {
    return <DynamicMessage20210313 courses={courses} />;
  } else {
    return null;
  }
};
