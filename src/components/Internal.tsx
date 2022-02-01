import React from 'react';

import { useDispatchContext } from '../hooks/useDispatchContext';
import { useStateContext } from '../hooks/useStateContext';

export const Internal: React.FC = () => {
  const { meta: { student, studentDiscount } } = useStateContext();
  const dispatch = useDispatchContext();

  const studentChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: 'SET_STUDENT', payload: e.target.checked });
  };

  const studentDiscountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: 'SET_STUDENT_DISCOUNT', payload: e.target.checked });
  };

  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8">
            <p className="mb-0">Use this form to enroll someone in one or more courses from the same school. If the person is already a student, check the &ldquo;Existing Student&rdquo; checkbox to add the multiple-course discount to all courses.</p>
          </div>
          <div className="col-12 col-lg-4">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="discountAll" checked={student} onChange={studentChange} />
              <label className="custom-control-label" htmlFor="discountAll">Existing Student</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="additionalDiscount" checked={studentDiscount} onChange={studentDiscountChange} />
              <label className="custom-control-label" htmlFor="additionalDiscount">Extra $50 (or £25) Discount per Course</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
