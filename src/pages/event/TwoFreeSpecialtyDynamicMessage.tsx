import { faCheckCircle, faExclamationCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, ReactElement } from 'react';

import { useStateContext } from '../../hooks/useStateContext';
import { isEventFoundationCourse, isEventSpecialtyCourse } from '../../lib/courses';

export const TwoFreeSpecialtyDynamicMessage = memo((): ReactElement | null => {
  const { courses } = useStateContext();

  if (courses.selected.length === 0) {
    return null;
  }
  if (!courses.selected.some(c => isEventFoundationCourse(c))) {
    return (
      <div className="alert alert-danger mt-4">
        <FontAwesomeIcon icon={faExclamationCircle} /> Select a foundation course to get two free specialty courses
      </div>
    );
  }
  const specialtyCount = courses.selected.filter(c => isEventSpecialtyCourse(c)).length;
  if (specialtyCount === 0) {
    return (
      <div className="alert alert-warning mt-4">
        <FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your two free specialty courses
      </div>
    );
  }
  if (specialtyCount === 1) {
    return (
      <div className="alert alert-warning mt-4">
        <FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your second free course
      </div>
    );
  }
  return (
    <div className="alert alert-success mt-4">
      <FontAwesomeIcon icon={faCheckCircle} /> Free specialty courses selected!
    </div>
  );
});

TwoFreeSpecialtyDynamicMessage.displayName = 'TwoFreeSpecialtyDynamicMessage';
