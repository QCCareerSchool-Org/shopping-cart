import React, { useState } from 'react';

import { useStateContext } from '../../hooks/useStateContext';
import { CheckBox } from './CheckBox';
import { CourseCard } from './CourseCard';
import { CourseTable } from './CourseTable';

export type DynamicCourseDescriptions = 'SHOW' | 'HIDE' | 'REPLACE';

type Props = {
  internal: boolean;
  coursesSubtitle?: () => JSX.Element;
  dynamicCourseMessages?: Array<() => JSX.Element | null>;
  courseOverride: boolean;
  shippingOptionReversed: boolean;
  dynamicCourseDescriptions?: DynamicCourseDescriptions;
  discountName?: string;
};

export const CourseSelection: React.FC<Props> = ({ internal, coursesSubtitle, dynamicCourseMessages, courseOverride, shippingOptionReversed, dynamicCourseDescriptions, discountName }) => {
  const { courses, price, enrollmentErrors } = useStateContext();
  const [ courseCode, setCourseCode ] = useState<string | undefined>();

  return (
    <section id="courses-section">
      <div className="container">
        {!courseOverride
          ? (
            <>
              <h2 className="h1">Choose Your Courses</h2>
              {coursesSubtitle?.()}
              <div className="row">
                <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0">
                  {enrollmentErrors.courses && (
                    <div className="alert alert-danger">
                      <h6>Incomplete Form</h6>
                      <p className="mb-0">Please select one or more courses.</p>
                    </div>
                  )}
                  {courses.courseGroups.map((g, i) => (
                    <React.Fragment key={i}>
                      {g.name && <h5 className={i > 0 ? 'mt-2' : ''}>{g.name}</h5>}
                      {g.items.filter(c => !courses.hidden.includes(c.code)).map(c => <CheckBox key={c.code} course={c} internal={internal} mouseOver={() => { setCourseCode(c.code); }} />)}
                    </React.Fragment>
                  ))}
                  {dynamicCourseMessages?.map((DynamicCourseMessage, i) => (
                    <DynamicCourseMessage key={i} />
                  ))}
                  {!!price && dynamicCourseDescriptions === 'SHOW' && <div className="mt-4"><CourseTable price={price} showBuyOneGetOne={false} shippingOptionReversed={shippingOptionReversed} discountName={discountName} /></div>}
                </div>
                {(dynamicCourseDescriptions === 'SHOW' || dynamicCourseDescriptions === 'REPLACE')
                  ? (
                    <div className="d-none d-md-block col-12 col-md-6">
                      <CourseCard courseCode={courseCode} />
                    </div>
                  )
                  : (
                    <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0 mt-4 mt-md-0">
                      {!!price && <CourseTable price={price} showBuyOneGetOne={false} shippingOptionReversed={shippingOptionReversed} discountName={discountName} />}
                    </div>
                  )
                }
              </div>
            </>
          )
          : (
            <>
              <div className="row">
                <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                  {!!price && <CourseTable price={price} showBuyOneGetOne={false} shippingOptionReversed={shippingOptionReversed} discountName={discountName} />}
                </div>
              </div>
            </>
          )
        }
      </div>
    </section>
  );
};
