import React, { ReactElement } from 'react';

type Props = {
  date: Date;
  courses: string[];
};

export const DynamicMessage = ({ date, courses }: Props): ReactElement | null => {
  // const time = date.getTime();
  return null;
};
