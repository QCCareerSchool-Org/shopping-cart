import React from 'react';

type Props = {
  courses: string[];
};

export const DynamicMessage20210601: React.FC<Props> = ({ courses }) => {
  if (!courses.includes('EP') && (courses.includes('DW') || courses.includes('LW'))) {
    return <p className="mt-4 alert alert-danger">Get <strong>Destination Wedding Planning</strong> and <strong>Luxury Wedding Planning</strong> free when you enroll in <strong>Event &amp; Wedding Planning</strong></p>;
  }
  if (courses.includes('EP') && !(courses.includes('DW') || courses.includes('LW'))) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select both <strong>Destination Wedding Planning</strong> and <strong>Luxury Wedding Planning</strong> for free</p>;
  }
  if (courses.includes('EP') && !courses.includes('DW')) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select <strong>Destination Wedding Planning</strong> for free</p>;
  }
  if (courses.includes('EP') && !courses.includes('LW')) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select <strong>Luxury Wedding Planning</strong> for free</p>;
  }
  if (courses.includes('EP') && courses.includes('DW') && courses.includes('LW')) {
    return <p className="mt-4 alert alert-success">Get <strong>Destination Wedding Planning</strong> and <strong>Luxury Wedding Planning</strong> when you enroll in <strong>Event &amp; Wedding Planning</strong></p>;
  }
  return null;
};
