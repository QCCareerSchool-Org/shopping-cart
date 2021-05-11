import React from 'react';

type Props = {
  courses: string[];
};

export const DynamicMessage20210329: React.FC<Props> = ({ courses }) => {
  const numCourses = courses.length;
  if (numCourses === 1) {
    if (courses[0] === 'VD') {
      return <p className="mt-4 alert alert-danger">Enroll in any other course to get Virtual Design for FREE</p>;
    }
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select a Virtual Design and any second course for FREE</p>;
  } else if (numCourses === 2) {
    if (courses.includes('VD')) {
      return <p className="mt-4 alert alert-danger">Don&apos;t forget to select a second free course</p>;
    }
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your free Virtual Design course</p>;
  } else if (numCourses > 2) {
    if (courses.includes('VD')) {
      return <p className="mt-4 alert alert-success">Enroll in once course and get Virtual Design and any second course for FREE</p>;
    }
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your free Virtual Design course</p>;
  }
  return null;
};
