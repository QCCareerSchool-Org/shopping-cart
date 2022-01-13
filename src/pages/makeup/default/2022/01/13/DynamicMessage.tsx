import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

export interface Props {
  courses: string[];
}

export const DynamicMessage20220113 = ({ courses }: Props): ReactElement | null => {
  if (courses.length === 0) {
    return null;
  } else if (!courses.includes('MZ')) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Select the <strong>Master Makeup Artistry</strong> course to get the free <strong>New Year Makeup Kit</strong></p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> You&apos;ll get the free <strong>New Year Makeup Kit</strong></p>;
};
