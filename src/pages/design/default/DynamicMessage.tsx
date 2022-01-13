/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';

import { DynamicMessage20211220 } from './2021/12/20/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
};

export const DynamicMessage = ({ date, courses }: Props): ReactElement | null => {
  const time = date.getTime();
  if (time >= Date.UTC(2022, 0, 13, 14, 30)) { // January 13 at 09:30 (13:30 UTC)
    return null;
  }
  return <DynamicMessage20211220 courses={courses} />;
};
