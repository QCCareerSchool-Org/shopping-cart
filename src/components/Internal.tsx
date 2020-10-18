import React from 'react';

import { useDispatchContext } from '../hooks/useDispatchContext';
import { useStateContext } from '../hooks/useStateContext';

export const Internal: React.FC = () => {
  const { meta: { student } } = useStateContext();
  const dispatch = useDispatchContext();

  const studentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    dispatch({ type: 'SET_STUDENT', payload: checked });
  };

  return (
    <div className="custom-control custom-checkbox">
      <input type="checkbox" className="custom-control-input" id="student-checkbox" checked={student} onChange={studentChange} />
      <label className="custom-control-label" htmlFor="student-checkbox">Existing Student</label>
    </div>
  );
};
