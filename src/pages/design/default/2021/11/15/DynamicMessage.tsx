import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

export interface Props {
  courses: string[];
}

export const DynamicMessage20211115 = ({ courses }: Props): ReactElement | null => {
  const courseCount = courses.length;
  if (courseCount === 0) {
    return null;
  }
  if (courses.includes('VD')) {
    if (courseCount === 1) {
      // only VD selected
      return <p className="mt-4 alert alert-danger"><FontAwesomeIcon icon={faExclamationCircle} /> Enroll in any other course and get <strong>Virtual Design</strong> for free</p>;
    } else if (courseCount === 2) {
      // VD and one other course selected
      return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your additional free course</p>;
    }
    // VD and two or more other courses selected
    return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Free second course and free <strong>Virtual Design</strong> course</p>;
  }
  if (courseCount === 1) {
    // one non-VD course selected
    return <p className="mt-4 alert alert-danger"><FontAwesomeIcon icon={faExclamationCircle} /> Don&apos;t forget to select your free courses</p>;
  }
  // two or more non-VD courses selected
  return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your additional free <strong>Virtual Design</strong> course</p>;
};
