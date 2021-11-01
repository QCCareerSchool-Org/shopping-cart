import React from 'react';

export interface Props {
  courses: string[];
}

export const DynamicMessage20211101: React.FC<Props> = ({ courses }) => {
  if (courses.length === 0) {
    return null;
  } else if (courses.length === 1) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your free second course</p>;
  }
  return <p className="mt-4 alert alert-success">Free second course selected</p>;
};
