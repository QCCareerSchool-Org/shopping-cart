import React from 'react';

type Props = {
  courses: string[];
}

export const DynamicMessage: React.FC<Props> = ({ courses }) => {
  if (courses.includes('MZ') && !courses.includes('VM') && !courses.includes('MW')) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your free <strong>Pro Makeup Workshop</strong> and <strong>Virtual Makeup Course</strong></p>;
  }
  if (courses.includes('MZ') && !courses.includes('VM')) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your free <strong>Virtual Makeup Course</strong></p>;
  }
  if (courses.includes('MZ') && !courses.includes('MW')) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your free <strong>Pro Makeup Workshop</strong></p>;
  }
  if (!courses.includes('MZ') && (courses.includes('VM') || courses.includes('MW'))) {
    return <p className="mt-4 alert alert-danger">Receive both the Pro Makeup Workshop and Virtual Makeup Course FREE when you enroll in <strong>Master Makeup Artistry</strong></p>;
  }
  if (courses.includes('MZ') && courses.includes('VM') && courses.includes('MW')) {
    return <p className="mt-4 alert alert-success">Receive both the Pro Makeup Workshop and Virtual Makeup Course FREE when you enroll in <strong>Master Makeup Artistry</strong></p>;
  }
  return null;
};
