import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export interface Props {
  courses: string[];
}

export const DynamicMessage20220201: React.FC<Props> = ({ courses }) => {
  if (courses.length === 0) {
    return null;
  } else if (courses.length === 1) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your free second course</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Free second course selected</p>;
};
