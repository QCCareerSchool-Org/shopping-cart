import React from 'react';

import { DynamicMessage20210315 } from './2021/03/15/DynamicMessage';
import { DynamicMessage20210406 } from './2021/04/06/DynamicMessage';
import { DynamicMessage20210419 } from './2021/04/19/DynamicMessage';
import { DynamicMessage20210501 } from './2021/05/01/DynamicMessage';

type Props = {
  date: Date;
  courses: string[];
}

export const DynamicMessage: React.FC<Props> = ({ date, courses }) => {
  if (date.getTime() >= Date.UTC(2021, 4, 3, 13)) {
    return null;
  } else if (date.getTime() >= Date.UTC(2021, 4, 1, 12)) {
    return <DynamicMessage20210501 courses={courses} />;
  } else if (date.getTime() >= Date.UTC(2021, 3, 19, 13)) {
    return <DynamicMessage20210419 courses={courses} />;
  } else if (date.getTime() >= Date.UTC(2021, 3, 6, 13)) {
    return <DynamicMessage20210406 courses={courses} />;
  } else {
    return <DynamicMessage20210315 courses={courses} />;
  }
};
