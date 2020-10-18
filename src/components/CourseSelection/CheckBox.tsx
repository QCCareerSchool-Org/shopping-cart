import React from 'react';

import { useDispatchContext } from '../../hooks/useDispatchContext';
import { Course } from '../../components/CourseSelection';
import { useStateContext } from '../../hooks/useStateContext';

type Props = {
  course: Course;
}

export const CheckBox: React.FC<Props> = ({ course }) => {
  const { courses } = useStateContext();
  const dispatch = useDispatchContext();

  const courseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch({ type: 'ADD_COURSE', payload: course.code });
    } else {
      dispatch({ type: 'REMOVE_COURSE', payload: course.code });
    }
  };

  return (
    <div className="custom-control custom-checkbox mt-2">
      <input type="checkbox" className="custom-control-input" id={`courses-${course.code}`} checked={courses.selected.includes(course.code)} disabled={courses.disabled.includes(course.code)} onChange={courseChange} />
      <label className="custom-control-label" htmlFor={`courses-${course.code}`}>{course.name}</label>
    </div>
  );
};
