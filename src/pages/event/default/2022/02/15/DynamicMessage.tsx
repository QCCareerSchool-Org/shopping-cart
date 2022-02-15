import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export interface Props {
  courses: string[];
}

export const DynamicMessage20220215: React.FC<Props> = ({ courses }) => {
  if (courses.length === 0) {
    return null;
  }
  if (!courses.includes('EP')) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Enroll in the <strong>Event &amp; Wedding Planning</strong> course to get both the <strong>Luxury Wedding &amp; Event Planning</strong> and <strong>Destination Wedding Planning</strong> courses for free.</p>;
  }
  if (!courses.includes('LW') && !courses.includes('DW')) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your free <strong>Luxury Wedding &amp; Event Planning</strong> and <strong>Destination Wedding Planning</strong> courses</p>;
  }
  if (!courses.includes('LW')) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your free <strong>Luxury Wedding &amp; Event Planning</strong> course</p>;
  }
  if (!courses.includes('DW')) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your free <strong>Destination Wedding Planning</strong> course</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Free courses selected!</p>;
};
