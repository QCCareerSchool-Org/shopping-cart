import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import { isMakeupAdvancedCourse } from '../../../../../../lib/courses';

export interface Props {
  courses: string[];
}

export const DynamicMessage20220301 = ({ courses }: Props): ReactElement | null => {
  if (courses.length === 0) {
    return null;
  } else if (!courses.includes('MZ')) {
    return <p className="mt-4 alert alert-danger"><FontAwesomeIcon icon={faExclamationCircle} /> Select the <strong>Master Makeup Artistry</strong> course to get a free <strong>Advanced Course</strong> and the <strong>Luminous Collection</strong> for FREE</p>;
  } else if (!courses.some(c => isMakeupAdvancedCourse(c))) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your free <strong>Advanced Course</strong></p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Free Advanced Course and Luminous Collection makeup kit!</p>;
};
