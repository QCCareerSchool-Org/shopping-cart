import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, ReactElement } from 'react';

import { useStateContext } from '../../../../../../hooks/useStateContext';

export const DynamicMessage20220824 = memo((): ReactElement | null => {
  const { courses } = useStateContext();
  if (courses.selected.length === 0) {
    return null;
  }
  if (!courses.selected.includes('MZ')) {
    return <p className="mt-4 alert alert-danger"><FontAwesomeIcon icon={faExclamationCircle} /> Select the <strong>Master Makeup Artistry</strong> course to qualify for a free <strong>Skincare</strong> course. You&apos;ll also get the <strong>Luminous Collection</strong> for FREE</p>;
  }
  if (!courses.selected.includes('SK')) {
    return <p className="mt-4 alert alert-warning"><FontAwesomeIcon icon={faInfoCircle} /> Don&apos;t forget to select your free <strong>Skincare</strong> course</p>;
  }
  return <p className="mt-4 alert alert-success"><FontAwesomeIcon icon={faCheckCircle} /> You&apos;ll get the <strong>Skincare</strong> course and <strong>Luminous Collection</strong> makeup kit FREE!</p>;
});

DynamicMessage20220824.displayName = 'DynamicMessage20220824';
