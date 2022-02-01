import React, { ReactElement } from 'react';

import { DynamicMessage20220124 } from './2022/01/24/DynamicMessage';
import { DynamicMessage20220201 } from './2022/02/01/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
};

export const DynamicMessage = ({ date, courses }: Props): ReactElement => {
  const time = date.getTime();
  if (time >= Date.UTC(2022, 1, 1, 14, 30)) { // February 1 at 9:30 (14:30 UTC)
    return <DynamicMessage20220201 courses={courses} />;
  }
  return <DynamicMessage20220124 courses={courses} />;
};
