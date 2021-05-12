/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { DynamicMessage20210313 } from './2021/03/13/DynamicMessage';
import { DynamicMessage20210315 } from './2021/03/15/DynamicMessage';

export interface Props {
  date: Date;
  courses: string[];
}

export const DynamicMessage: React.FC<Props> = ({ date, courses }) => {
  if (date.getTime() >= Date.UTC(2021, 2, 29, 12)) {
    return null;
  } else if (date.getTime() >= Date.UTC(2021, 2, 15, 12)) {
    return <DynamicMessage20210315 courses={courses} />;
  } else if (date.getTime() >= Date.UTC(2021, 2, 13, 13)) {
    return <DynamicMessage20210313 courses={courses} />;
  }
  return null;
};
