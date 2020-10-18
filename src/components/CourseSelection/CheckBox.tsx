import React from 'react';

import { useDispatchContext } from '../../hooks/useDispatchContext';
import { Course } from '../../state/courses';

type Props = {
  course: Course;
}

export const CheckBox: React.FC<Props> = ({ course }) => {
  const dispatch = useDispatchContext();

  const courseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch({ type: 'ADD_COURSE', payload: course.code });
    } else {
      dispatch({ type: 'REMOVE_COURSE', payload: course.code });
    }
  };

  return (
    <div className="form-check">
      <input id={`courses-${course.code}`} className="form-check-input" type="checkbox" checked={course.selected} onChange={courseChange} />
      <label htmlFor={`courses-${course.code}`} className="form-check-label" >{course.name}</label>
    </div>
  );
};
