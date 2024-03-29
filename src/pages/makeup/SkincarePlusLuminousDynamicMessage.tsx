import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, ReactElement } from 'react';

import { useStateContext } from '../../hooks/useStateContext';

export const SkincarePlusLuminousDynamicMessage = memo((): ReactElement | null => {
  const { courses: { selected } } = useStateContext();
  if (selected.length === 0) {
    return null;
  } else if (!selected.includes('MZ')) {
    return <p className="mt-4 alert alert-danger"><FontAwesomeIcon icon={faExclamationCircle} /> Select the <strong>Master Makeup Artistry</strong> course to get the <strong>Skincare Consultant</strong> course FREE</p>;
  } else if (!selected.includes('SK')) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your free <strong>Skincare Consultant</strong> course</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> You&apos;ll get the <strong>Skincare Consultant</strong> course FREE!</p>;
});

SkincarePlusLuminousDynamicMessage.displayName = 'SkincarePlusLuminousDynamicMessage';
