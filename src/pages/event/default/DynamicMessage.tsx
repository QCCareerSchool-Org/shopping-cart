import React, { ReactElement } from 'react';

import { DynamicMessage20220124 } from './2022/01/24/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
};

export const DynamicMessage = ({ date, courses }: Props): ReactElement => {
  // const time = date.getTime();
  return <DynamicMessage20220124 courses={courses} />;
};
