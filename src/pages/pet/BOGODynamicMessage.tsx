import React, { ReactElement } from 'react';
import { useStateContext } from '../../hooks/useStateContext';

export const BOGODynamicMessage = (): ReactElement | null => {
  const { courses } = useStateContext();
  if (courses.selected.length >= 1) {
    return (
      <div className="alert alert-primary mt-3">
        <strong>Save 50%</strong> on each additional course of equal or lesser value
      </div>
    );
  }
  return null;
};
