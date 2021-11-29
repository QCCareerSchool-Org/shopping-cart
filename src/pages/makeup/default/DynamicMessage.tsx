import React, { ReactElement } from 'react';

import { DynamicMessage20211115 } from './2021/11/15/DynamicMessage';
import { DynamicMessage20211129 } from './2021/11/29/DynamicMessage';

export interface Props {
  date: Date;
  courses: string[];
}

export const DynamicMessage = ({ date, courses }: Props): ReactElement => {
  const time = date.getTime();
  if (time >= Date.UTC(2021, 10, 29, 14)) {
    return <DynamicMessage20211129 courses={courses} />;
  }
  return <DynamicMessage20211115 courses={courses} />;
};
