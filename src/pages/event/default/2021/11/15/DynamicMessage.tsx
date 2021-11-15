import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

import { isEventSpecialtyCourse } from '../../../../../../lib/courses';

export interface Props {
  courses: string[];
}

export const DynamicMessage20211115 = ({ courses }: Props): ReactElement | null => {
  if (courses.length === 0) {
    return null;
  }
  const epSelected = courses.includes('EP');
  const specialtyCourseCount = courses.filter(c => isEventSpecialtyCourse(c)).length;
  if (!epSelected && specialtyCourseCount > 0) {
    return <p className="mt-4 alert alert-danger"><FontAwesomeIcon icon={faExclamationCircle} /> Enroll in <strong>Event &amp; Wedding Planning</strong> and get 2 FREE specialty courses</p>;
  } else if (epSelected && specialtyCourseCount === 0) {
    return <p className="mt-4 alert alert-danger"><FontAwesomeIcon icon={faExclamationCircle} /> Don&apos;t forget to select your FREE specialty courses</p>;
  } else if (epSelected && specialtyCourseCount === 1) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> You can select a second FREE specialty course</p>;
  } else if (epSelected && specialtyCourseCount >= 2) {
    return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Enroll in <strong>Event &amp; Wedding Planning</strong> and get 2 FREE specialty courses</p>;
  }
  return null;
};
