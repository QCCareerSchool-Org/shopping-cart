import { faCheckCircle, faExclamationCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

import { useStateContext } from '../../../hooks/useStateContext';

export const DynamicMessage = (): ReactElement | null => {
  const { courses } = useStateContext();

  if (courses.selected.length === 0) {
    return null;
  }
  if (!courses.selected.includes('I2')) {
    return <p className="mt-4 alert alert-danger"><FontAwesomeIcon icon={faExclamationCircle} /> Select <strong>Interior Decorating</strong> in order to qualify for a free second course</p>;
  }
  if (courses.selected.length < 2) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your free second course</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Free second course selected</p>;
};
