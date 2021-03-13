import React from 'react';
import { DynamicMessage20210315 } from './2021/03/15/DynamicMessage';
import { DynamicMessage20210302 } from './2021/03/02/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
}

export const DynamicMessage: React.FC<Props> = ({ date, courses }) =>
  date > new Date('2021-03-15T09:00:00-04:00')
    ? <DynamicMessage20210315 courses={courses} />
    : <DynamicMessage20210302 courses={courses} />;
