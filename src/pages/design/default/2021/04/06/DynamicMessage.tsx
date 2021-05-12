import React from 'react';

type Props = {
  courses: string[];
};

export const DynamicMessage20210406: React.FC<Props> = ({ courses }) => {
  const numCourses = courses.length;
  const minCourses = 2;
  if (numCourses === 1) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select a second course for FREE</p>;
  } else if (numCourses >= minCourses) {
    return <p className="mt-4 alert alert-success">Enroll in one course and get any second course for FREE</p>;
  }
  return null;
};
