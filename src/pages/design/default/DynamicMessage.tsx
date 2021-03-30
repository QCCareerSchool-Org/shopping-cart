import React from 'react';
import { DynamicMessage20210302 } from './2021/03/02/DynamicMessage';
import { DynamicMessage20210329 } from './2021/03/29/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
}

export const DynamicMessage: React.FC<Props> = ({ date, courses }) => {
  if (date.getTime() >= Date.UTC(2021, 2, 29, 13)) {
    return <DynamicMessage20210329 courses={courses} />;
  } else {
    return <DynamicMessage20210302 courses={courses} />;
  }
};
