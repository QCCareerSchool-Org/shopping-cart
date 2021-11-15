/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';

import { DynamicMessage20211101 } from './2021/11/01/DynamicMessage';
import { DynamicMessage20211115 } from './2021/11/15/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
};

export const DynamicMessage = ({ date, courses }: Props): ReactElement => {
  const time = date.getTime();
  if (time >= Date.UTC(2021, 10, 15, 14)) {
    return <DynamicMessage20211115 courses={courses} />;
  }
  return <DynamicMessage20211101 courses={courses} />;
};
