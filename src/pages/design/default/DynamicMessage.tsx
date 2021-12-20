/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';

import { DynamicMessage20211220 } from './2021/12/20/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
};

export const DynamicMessage = ({ date, courses }: Props): ReactElement => {
  // const time = date.getTime();
  return <DynamicMessage20211220 courses={courses} />;
};
