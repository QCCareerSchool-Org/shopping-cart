import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { isEventFoundationCourse, isEventSpecialtyCourse } from '../../../../../../lib/courses';

export interface Props {
  courses: string[];
}

export const DynamicMessage20220301: React.FC<Props> = ({ courses }) => {
  if (courses.length === 0) {
    return null;
  }
  if (!courses.some(c => isEventFoundationCourse(c))) {
    return <p className="mt-4 alert alert-danger"><FontAwesomeIcon icon={faExclamationCircle} /> Enroll in any <strong>Foundation Course</strong> to get a FREE <strong>Specialty Course</strong>.</p>;
  }
  if (!courses.some(c => isEventSpecialtyCourse(c))) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your FREE <strong>Specialty Course</strong>.</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Free courses selected!</p>;
};
