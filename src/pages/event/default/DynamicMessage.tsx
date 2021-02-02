import React from 'react';

export interface Props {
  courses: string[];
}

export const DynamicMessage: React.FC<Props> = ({ courses }) => {
  const foundationSelected = courses.some(c => [ 'EP', 'WP', 'CE', 'CP' ].includes(c));
  const advancedSpecialtySelected = courses.some(c => [ 'LW', 'DW', 'FL', 'PE', 'TT', 'EB', 'ED' ].includes(c));
  const veSelected = courses.includes('VE');
  if (foundationSelected && !advancedSpecialtySelected && !veSelected) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your FREE Advanced or Specialty course and FREE Virtual Event Training</p>;
  }
  if (foundationSelected && !advancedSpecialtySelected) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your FREE Advanced or Specialty course</p>;
  }
  if (foundationSelected && !veSelected) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your FREE Virtual Event Training</p>;
  }
  if (!foundationSelected && (advancedSpecialtySelected || veSelected)) {
    return <p className="mt-4 alert alert-danger">Get an Advanced or Specialty course and Virtual Event Training FREE when you also enroll in any foundation course.</p>;
  }
  if (foundationSelected && veSelected) {
    return <p className="mt-4 alert alert-success">Get an Advanced or Specialty course and Virtual Event Training FREE when you also enroll in any foundation course.</p>;
  }
  return null;
};
