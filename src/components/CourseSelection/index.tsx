import React from 'react';

import { useStateContext } from '../../hooks/useStateContext';
import { CheckBox } from './CheckBox';
import { CourseTable } from './CourseTable';

type Props = {
  internal: boolean;
  coursesSubtitle?: () => JSX.Element;
  dynamicCourseMessages?: Array<() => JSX.Element>;
}

export const CourseSelection: React.FC<Props> = ({ internal, coursesSubtitle, dynamicCourseMessages }) => {
  const { courses, price } = useStateContext();
  return (
    <section>
      <div className="container">
        <h2>Choose Your Courses</h2>
        {coursesSubtitle && coursesSubtitle()}
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0 mb-4 mb-md-0">
            {courses.courseGroups.map((g, i) => (
              <React.Fragment key={i}>
                {g.name && <h5 className={i > 0 ? 'mt-2' : ''}>{g.name}</h5>}
                {g.items.filter(c => !courses.hidden.includes(c.code)).map(c => <CheckBox key={c.code} course={c} internal={internal} />)}
              </React.Fragment>
            ))}
            {dynamicCourseMessages && dynamicCourseMessages.map(d => d())}
          </div>
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0">
            {!!price && <CourseTable price={price} showBuyOneGetOne={false} />}
          </div>
        </div>
      </div>
    </section>
  );
};
