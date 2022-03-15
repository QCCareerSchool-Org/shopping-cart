import React, { ReactElement } from 'react';

import { DynamicMessage20220315 } from './2022/03/15/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
};

export const DynamicMessage = ({ date, courses }: Props): ReactElement => {
  // const time = date.getTime();
  return <DynamicMessage20220315 courses={courses} />;
};
