/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { DynamicMessage20210302 } from './2021/03/02/DynamicMessage';
import { DynamicMessage20210329 } from './2021/03/29/DynamicMessage';
import { DynamicMessage20210406 } from './2021/04/06/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
};

export const DynamicMessage: React.FC<Props> = ({ date, courses }) => {
  if (date.getTime() >= Date.UTC(2021, 3, 6, 13)) {
    return <DynamicMessage20210406 courses={courses} />;
  } else if (date.getTime() >= Date.UTC(2021, 2, 29, 13)) {
    return <DynamicMessage20210329 courses={courses} />;
  }
  return <DynamicMessage20210302 courses={courses} />;
};
