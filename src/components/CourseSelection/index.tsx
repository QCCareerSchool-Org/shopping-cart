import React from 'react';

import { useStateContext } from '../../hooks/useStateContext';
import { CheckBox } from './CheckBox';
import { CourseTable } from './CourseTable';

type Props = {
  internal: boolean;
  coursesSubtitle?: () => JSX.Element;
  dynamicCourseMessages?: Array<() => JSX.Element>;
  courseOverride: boolean;
}

export const CourseSelection: React.FC<Props> = ({ internal, coursesSubtitle, dynamicCourseMessages, courseOverride }) => {
  const { courses, price, enrollmentErrors } = useStateContext();
  return (
    <section id="courses-section">
      <div className="container">
        {!courseOverride
          ? (
            <>
              <h2 className="h1">Choose Your Courses</h2>
              {coursesSubtitle && coursesSubtitle()}
              <div className="row">
                <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0 mb-4 mb-md-0">
                  {enrollmentErrors.courses && (
                    <div className="alert alert-danger">
                      <h6>Incomplete Form</h6>
                      <p className="mb-0">Please select one or more courses.</p>
                    </div>
                  )}
                  {courses.courseGroups.map((g, i) => (
                    <React.Fragment key={i}>
                      {g.name && <h5 className={i > 0 ? 'mt-2' : ''}>{g.name}</h5>}
                      {g.items.filter(c => !courses.hidden.includes(c.code)).map(c => <CheckBox key={c.code} course={c} internal={internal} />)}
                    </React.Fragment>
                  ))}
                  {dynamicCourseMessages && dynamicCourseMessages.map((DynamicCourseMessage, i) => (
                    <DynamicCourseMessage key={i} />
                  ))}
                </div>
                <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0">
                  {!!price && <CourseTable price={price} showBuyOneGetOne={false} />}
                </div>
              </div>
            </>
          )
          : (
            <>
            <div className="row">
              <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                {!!price && <CourseTable price={price} showBuyOneGetOne={false} />}
              </div>
            </div>
            </>
          )
        }
      </div>
    </section>
  );
};
