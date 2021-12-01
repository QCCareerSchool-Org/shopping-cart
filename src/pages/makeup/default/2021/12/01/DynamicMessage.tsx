import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

export interface Props {
  courses: string[];
}

export const DynamicMessage20211201 = ({ courses }: Props): ReactElement | null => {
  if (courses.length === 0) {
    return null;
  } else if (!courses.includes('MZ')) {
    return <p className="mt-4 alert alert-danger"><FontAwesomeIcon icon={faExclamationCircle} /> Don&apos;t forget to select the <strong>Master Makeup Artistry</strong> course to qualify for the <strong>Skincare course</strong> and <strong>Luminous Collection</strong></p>;
  } else if (!courses.includes('SK')) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select to select your free <strong>Skincare course</strong></p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Enroll in <strong>Master Makeup Artistry</strong> to get the free <strong>Skincare course</strong> and <strong>Luminous Collection</strong></p>;
};
