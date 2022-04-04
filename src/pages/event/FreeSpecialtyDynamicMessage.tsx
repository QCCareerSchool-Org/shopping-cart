import { faCheckCircle, faExclamationCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, ReactElement } from 'react';

import { useStateContext } from '../../hooks/useStateContext';
import { isEventFoundationCourse, isEventSpecialtyCourse } from '../../lib/courses';

export const FreeSpecialtyDynamicMessage = memo((): ReactElement | null => {
  const { courses } = useStateContext();

  if (courses.selected.length === 0) {
    return null;
  }
  if (!courses.selected.some(c => isEventFoundationCourse(c))) {
    return (
      <div className="alert alert-danger mt-4">
        <FontAwesomeIcon icon={faExclamationCircle} /> Select a foundation course to get a free specialty course
      </div>
    );
  }
  const specialtyCount = courses.selected.filter(c => isEventSpecialtyCourse(c)).length;
  if (specialtyCount === 0) {
    return (
      <div className="alert alert-warning mt-4">
        <FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your free specialty course
      </div>
    );
  }
  return (
    <div className="alert alert-success mt-4">
      <FontAwesomeIcon icon={faCheckCircle} /> Free specialty course selected!
    </div>
  );
});

FreeSpecialtyDynamicMessage.displayName = 'FreeSpecialtyDynamicMessage';
