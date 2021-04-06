import React from 'react';

import { DynamicMessage20210315 } from './2021/03/15/DynamicMessage';
import { DynamicMessage20210406 } from './2021/04/06/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
}

export const DynamicMessage: React.FC<Props> = ({ date, courses }) => {
  if (date.getTime() >= Date.UTC(2021, 3, 6, 13)) {
    return <DynamicMessage20210406 courses={courses} />;
  } else {
    return <DynamicMessage20210315 courses={courses} />;
  }
};
