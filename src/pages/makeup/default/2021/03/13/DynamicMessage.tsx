import React from 'react';

export interface Props {
  courses: string[];
}

export const DynamicMessage20210313: React.FC<Props> = ({ courses }) => {
  if (courses.includes('MZ') && !courses.includes('VM')) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your free <strong>Virtual Makeup Course</strong></p>;
  }
  if (!courses.includes('MZ') && courses.includes('VM')) {
    return <p className="mt-4 alert alert-danger">Get the <strong>Virtual Makeup Course</strong> free when you enroll in <strong>Master Makeup Artistry</strong></p>;
  }
  if (courses.includes('MZ') && courses.includes('VM')) {
    return <p className="mt-4 alert alert-success">Get the <strong>Virtual Makeup Course</strong> free when you enroll in <strong>Master Makeup Artistry</strong></p>;
  }
  return null;
};
