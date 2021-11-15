import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

export interface Props {
  courses: string[];
}

export const DynamicMessage20211115 = ({ courses }: Props): ReactElement | null => {
  if (courses.length === 0) {
    return null;
  } else if (!courses.includes('MZ')) {
    return <p className="mt-4 alert alert-danger"><FontAwesomeIcon icon={faExclamationCircle} /> Don&apos;t forget to select the <strong>Master Makeup Artistry</strong> course to qualify for the <strong>Luminous Collection</strong> and <strong>free second course</strong></p>;
  } else if (courses.length < 2) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select to select your free second course</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Enroll in <strong>Master Makeup Artistry</strong> to get the free <strong>Luminous Collection</strong> and a free second course</p>;
};
