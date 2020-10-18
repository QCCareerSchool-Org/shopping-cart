import React from 'react';
import { useStateContext } from '../../hooks/useStateContext';
import { CheckBox } from './CheckBox';

export type Course = {
  code: string;
  name: string;
  description?: string;
  disabledMessage?: string | JSX.Element;
  badge?: JSX.Element;
};

export type CourseGroup = {
  name?: string;
  items: Course[];
}

type Props = {
  courseGroups: CourseGroup[];
}

export const CourseSelection: React.FC<Props> = ({ courseGroups }) => {
  const { courses } = useStateContext();
  return (
    <section>
      <div className="container">
        <h2>Choose Your Courses</h2>
        {courseGroups.map((g, i) => (
          <React.Fragment key={i}>
            {g.name && <h4 className={i > 0 ? 'mt-2' : ''}>{g.name}</h4>}
            {g.items.filter(c => !courses.hidden.includes(c.code)).map(c => <CheckBox key={c.code} course={c} />)}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
