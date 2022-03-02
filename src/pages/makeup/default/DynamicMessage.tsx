import React, { ReactElement } from 'react';

import { DynamicMessage20220301 } from './2022/03/01/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
};

export const DynamicMessage = ({ date, courses }: Props): ReactElement => {
  // const time = date.getTime();
  return <DynamicMessage20220301 courses={courses} />;
};
