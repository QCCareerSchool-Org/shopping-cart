import React from 'react';

type Props = {
  courses: string[];
};

export const DynamicMessage20210419: React.FC<Props> = ({ courses }) => {
  if (courses.includes('EP') && courses.includes('DW') && courses.includes('LW')) {
    return <p className="mt-4 alert alert-success">Get the <strong>Destination Wedding Planning</strong> and <strong>Luxury Wedding Planning</strong> courses free when you enroll in the <strong>Event &amp; Wedding Planning</strong> course</p>;
  }
  if (!courses.includes('EP') && courses.includes('DW') && courses.includes('LW')) {
    return <p className="mt-4 alert alert-danger">Get the <strong>Destination Wedding Planning</strong> and <strong>Luxury Wedding Planning</strong> courses free when you enroll in the <strong>Event &amp; Wedding Planning</strong> course</p>;
  }
  if (courses.includes('EP') && !(courses.includes('DW') && courses.includes('LW'))) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your free <strong>Destination Wedding Planning</strong> and <strong>Luxury Wedding Planning</strong> courses</p>;
  }
  return null;
};
