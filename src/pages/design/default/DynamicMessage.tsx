import React, { ReactElement } from 'react';

import { DynamicMessage20220201 } from './2022/02/01/DynamicMessage';
import { DynamicMessage20220215 } from './2022/02/15/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
};

export const DynamicMessage = ({ date, courses }: Props): ReactElement => {
  const time = date.getTime();
  if (time >= Date.UTC(2022, 1, 15, 14, 30)) { // February 15 at 9:30 (14:30 UTC)
    return <DynamicMessage20220215 courses={courses} />;
  }
  return <DynamicMessage20220201 courses={courses} />;
};
