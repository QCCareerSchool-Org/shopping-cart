import React from 'react';
import { useFormDispatch } from '../../hooks/useFormDispatch';

import { Course } from '../../hooks/useFormReducer';
import { useFormState } from '../../hooks/useFormState';

type Props = {
  course: Course;
}

export const CheckBox: React.FC<Props> = ({ course }) => {
  const { selectedCourses } = useFormState();
  const dispatch = useFormDispatch();

  return (
    <div className="form-check">
      <input id={`courses-${course.code}`} className="form-check-input" type="checkbox" checked={selectedCourses.includes(course.code)} />
      <label htmlFor={`courses-${course.code}`} className="form-check-label" >{course.name}</label>
    </div>
  );
};
