import React from 'react';
import { useStateContext } from '../../../hooks/useStateContext';

export const DynamicMessage: React.FC = () => {
  const { courses: { selected } } = useStateContext();

  if (selected.includes('MZ') && !selected.includes('VM') && !selected.includes('MW')) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your free <strong>Pro Makeup Workshop</strong> and <strong>Virtual Makeup Course</strong></p>;
  }
  if (selected.includes('MZ') && !selected.includes('VM')) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your free <strong>Virtual Makeup Course</strong></p>;
  }
  if (selected.includes('MZ') && !selected.includes('MW')) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your free <strong>Pro Makeup Workshop</strong></p>;
  }
  if (!selected.includes('MZ') && (selected.includes('VM') || selected.includes('MW'))) {
    return <p className="mt-4 alert alert-danger">Receive both the Pro Makeup Workshop and Virtual Makeup Course FREE when you enroll in <strong>Master Makeup Artistry</strong></p>;
  }
  if (selected.includes('MZ') && selected.includes('VM') && selected.includes('MW')) {
    return <p className="mt-4 alert alert-success">Receive both the Pro Makeup Workshop and Virtual Makeup Course FREE when you enroll in <strong>Master Makeup Artistry</strong></p>;
  }
  return null;
};
