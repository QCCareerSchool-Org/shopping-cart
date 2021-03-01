import React from 'react';

export interface Props {
  courses: string[];
}

const makeupAdvancedCourse = (course: string): boolean => {
  return [ 'MW', 'PW', 'GB', 'VM' ].includes(course);
};

export const DynamicMessage: React.FC<Props> = ({ courses }) => {
  const advancedCount = courses.filter(makeupAdvancedCourse).length;
  if (courses.includes('MZ') && advancedCount === 0) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your free advanced course</p>;
  }
  if (!courses.includes('MZ') && advancedCount >= 1) {
    return <p className="mt-4 alert alert-danger">Get an advanced course free when you enroll in <strong>Master Makeup Artistry</strong></p>;
  }
  if (courses.includes('MZ') && courses.length >= 1) {
    return <p className="mt-4 alert alert-success">Get an advanced course free when you enroll in <strong>Master Makeup Artistry</strong></p>;
  }
  return null;
};
