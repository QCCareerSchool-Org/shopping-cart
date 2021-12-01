import React, { ReactElement } from 'react';

import { DynamicMessage20211201 } from './2021/12/01/DynamicMessage';

export interface Props {
  date: Date;
  courses: string[];
}

export const DynamicMessage = ({ date, courses }: Props): ReactElement => {
  // const time = date.getTime();
  return <DynamicMessage20211201 courses={courses} />;
};
