import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { isEventFoundationCourse } from '../../../../../../lib/courses';

export interface Props {
  courses: string[];
}

export const DynamicMessage20220201: React.FC<Props> = ({ courses }) => {
  if (courses.length === 0) {
    return null;
  }
  if (!(courses.some(c => isEventFoundationCourse(c)))) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Enroll in any <strong>Foundation</strong> course and get the <strong>Luxury Wedding Planning</strong> course for free.</p>;
  }
  if (!(courses.includes('LW'))) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your free <strong>Luxury Wedding Planning</strong> course</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Free course selected!</p>;
};
