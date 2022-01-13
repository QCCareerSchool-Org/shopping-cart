import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { isEventFoundationCourse, isEventSpecialtyCourse } from '../../../../../../lib/courses';

export interface Props {
  courses: string[];
}

export const DynamicMessage20220113: React.FC<Props> = ({ courses }) => {
  if (courses.length === 0) {
    return null;
  }
  if (!courses.some(c => isEventFoundationCourse(c))) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Enroll in any <strong>Foundation</strong> course and get any <strong>Specialty</strong> course for free.</p>;
  }
  if (!courses.some(c => isEventSpecialtyCourse(c))) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your free <strong>Specialty</strong> course</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Free course selected!</p>;
};
