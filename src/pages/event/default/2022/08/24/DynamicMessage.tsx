import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, ReactElement } from 'react';

import { useStateContext } from '../../../../../../hooks/useStateContext';
import { isEventFoundationCourse, isEventSpecialtyCourse } from '../../../../../../lib/courses';

export const DynamicMessage20220824 = memo((): ReactElement | null => {
  const { courses } = useStateContext();
  if (courses.selected.length === 0) {
    return null;
  }
  if (!(courses.selected.some(c => isEventFoundationCourse(c)))) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Enroll in any <strong>Foundation</strong> course and get any two <strong>Specialty</strong> courses for free.</p>;
  }
  const specialtyCount = courses.selected.filter(c => isEventSpecialtyCourse(c)).length;
  if (specialtyCount === 0) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your two free <strong>Specialty</strong> courses</p>;
  }
  if (specialtyCount === 1) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your second free <strong>Specialty</strong> course</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Free courses selected!</p>;
});

DynamicMessage20220824.displayName = 'DynamicMessage20220824';
