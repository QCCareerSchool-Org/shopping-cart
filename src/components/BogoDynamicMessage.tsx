import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, ReactElement } from 'react';

export const BogoDynamicMessage = memo((): ReactElement | null => {
  return <p className="mt-4 alert alert-info"><FontAwesomeIcon icon={faInfoCircle} /> <strong>Get 50% off</strong> each additional course of equal or lesser value!</p>;
});

BogoDynamicMessage.displayName = 'BogoDynamicMessage';
