import React from 'react';

type Props = {
  courses: string[];
}

export const DynamicMessage: React.FC<Props> = ({ courses }) => {
  const numCourses = courses.length;
  if (numCourses === 1) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select a second course for FREE</p>;
  }
  return null;
};
