import React from 'react';
import { useStateContext } from '../../hooks/useStateContext';
import { CheckBox } from './CheckBox';

export const CourseSelection: React.FC = () => {
  const { courses } = useStateContext();
  return (
    <section>
      <div className="container">
        <h2>Choose Your Courses</h2>
        {courses.map((g, i) => (
          <React.Fragment key={i}>
            {g.name && <h4 className={i > 0 ? 'mt-4' : ''}>{g.name}</h4>}
            {g.items.filter(c => !c.hidden).map(c => <CheckBox key={c.code} course={c} />)}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
