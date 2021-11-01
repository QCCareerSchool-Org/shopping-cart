import React from 'react';

export interface Props {
  courses: string[];
}

export const DynamicMessage20211101: React.FC<Props> = ({ courses }) => {
  if (courses.length === 0) {
    return null;
  } else if (!courses.includes('MZ')) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select the <strong>Master Makeup Artistry</strong> course to qualify for the <strong>Luminous Collection</strong></p>;
  }
  return <p className="mt-4 alert alert-success">You&apos;ll get the free <strong>Luminous Collection</strong></p>;
};
