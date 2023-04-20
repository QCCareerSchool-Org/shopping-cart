import { faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, ReactElement } from 'react';

import { useStateContext } from '../../hooks/useStateContext';

export const FreeVEDynamicMessage = memo((): ReactElement | null => {
  const { courses } = useStateContext();

  if (courses.selected.length === 0) {
    return null;
  }
  if (!courses.selected.includes('VE')) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your free <strong>Virtual Event</strong> traingin</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Free <strong>Virtual Event</strong> traingin selected</p>;
});

FreeVEDynamicMessage.displayName = 'FreeVEDynamicMessage';
