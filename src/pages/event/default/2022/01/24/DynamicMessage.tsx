import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { isEventFoundationCourse, isEventSpecialtyCourse } from '../../../../../../lib/courses';

export interface Props {
  courses: string[];
}

export const DynamicMessage20220124: React.FC<Props> = ({ courses }) => {
  if (courses.length === 0) {
    return null;
  }
  if (!(courses.some(c => isEventFoundationCourse(c)))) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Enroll in any <strong>Foundation</strong> course and get any two <strong>Specialty</strong> courses for free.</p>;
  }
  const specialtyCount = courses.filter(c => isEventSpecialtyCourse(c)).length;
  if (specialtyCount === 0) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your two free <strong>Specialty</strong> courses</p>;
  }
  if (specialtyCount === 1) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your second free <strong>Specialty</strong> course</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Free courses selected!</p>;
};
