import React, { ReactElement } from 'react';

import { DynamicMessage20211220 } from './2021/12/20/DynamicMessage';
import { DynamicMessage20220113 } from './2022/01/13/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
};

export const DynamicMessage = ({ date, courses }: Props): ReactElement => {
  const time = date.getTime();
  if (time >= Date.UTC(2022, 0, 13, 14, 30)) { // January 13 at 09:30 (13:30 UTC)
    return <DynamicMessage20220113 courses={courses} />;
  }
  return <DynamicMessage20211220 courses={courses} />;
};
