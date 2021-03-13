import React from 'react';

export interface Props {
  courses: string[];
}

export const DynamicMessage20210315: React.FC<Props> = ({ courses }) => {
  if (courses.includes('MZ') && !courses.includes('MW')) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your free <strong>Pro Makeup Workshop</strong></p>;
  }
  if (!courses.includes('MZ') && courses.includes('MW')) {
    return <p className="mt-4 alert alert-danger">Get the <strong>Pro Makeup Workshop</strong> free when you enroll in <strong>Master Makeup Artistry</strong></p>;
  }
  if (courses.includes('MZ') && courses.includes('MW')) {
    return <p className="mt-4 alert alert-success">Get the <strong>Pro Makeup Workshop</strong> free when you enroll in <strong>Master Makeup Artistry</strong></p>;
  }
  return null;
};
