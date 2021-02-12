import React from 'react';

export interface Props {
  courses: string[];
}

export const DynamicMessage: React.FC<Props> = ({ courses }) => {
  const numFoundationSelected = courses.filter(c => [ 'EP', 'CP', 'CE', 'WP', 'FD' ].includes(c)).length;
  const numSpecialtySelected = courses.filter(c => [ 'ED', 'EB', 'LW', 'DW', 'FL', 'PE', 'TT', 'VE' ].includes(c)).length;
  if (numSpecialtySelected >= 1 && numFoundationSelected === 0) {
    return <p className="mt-4 alert alert-danger">Get a FREE specialty course when you enroll in a foundation course</p>;
  }
  if (numSpecialtySelected >= 1 && numFoundationSelected >= 1) {
    return <p className="mt-4 alert alert-success">Get a FREE specialty course when you enroll in a foundation course</p>;
  }
  if (numSpecialtySelected === 0 && numFoundationSelected >= 1) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your FREE specialty course</p>;
  }
  return null;
};
