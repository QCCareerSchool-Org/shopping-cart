import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, ReactElement } from 'react';

import { useStateContext } from '../../../hooks/useStateContext';

export const LuminousDynamicMessage = memo((): ReactElement | null => {
  const { courses: { selected } } = useStateContext();
  if (selected.length === 0) {
    return null;
  } else if (!selected.includes('MZ')) {
    return <p className="mt-4 alert alert-danger"><FontAwesomeIcon icon={faExclamationCircle} /> Select the <strong>Master Makeup Artistry</strong> course to get the Luminous Collection</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> Luminous Collection included!</p>;
});

LuminousDynamicMessage.displayName = 'LuminousDynamicMessage';
