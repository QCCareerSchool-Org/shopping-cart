import { faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, ReactElement } from 'react';

import { useStateContext } from '../../hooks/useStateContext';

export const FreeVDDynamicMessage = memo((): ReactElement | null => {
  const { courses } = useStateContext();

  if (courses.selected.length === 0) {
    return null;
  }
  if (!courses.selected.includes('VD')) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your free <strong>Virtual Design</strong> training</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Free <strong>Virtual Design</strong> training selected</p>;
});

FreeVDDynamicMessage.displayName = 'FreeVDDynamicMessage';
