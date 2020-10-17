import React from 'react';
import { useFormState } from '../../hooks/useFormState';
import { CheckBox } from './CheckBox';

export const CourseSelection: React.FC = () => {
  const { availableCourses } = useFormState();
  return (
    <section>
      <div className="container">
        <h2>Course Selection</h2>
        {availableCourses.map(c => <CheckBox key={c.code} course={c} />)}
      </div>
    </section>
  );
};
