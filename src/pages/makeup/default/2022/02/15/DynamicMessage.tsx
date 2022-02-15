import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

export interface Props {
  courses: string[];
}

export const DynamicMessage20220215 = ({ courses }: Props): ReactElement | null => {
  if (courses.length === 0) {
    return null;
  } else if (!courses.includes('MZ')) {
    return <p className="mt-4 alert alert-danger"><FontAwesomeIcon icon={faExclamationCircle} /> Select the <strong>Master Makeup Artistry</strong> course to get the <strong>Luminous Collection</strong> for FREE</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Free Luminous Collection makeup kit!</p>;
};
