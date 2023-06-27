import { EnrollmentErrors } from '../lib/enrollmentError';

export type EnrollmentErrorsState = EnrollmentErrors;

export type EnrollmentErrorsAction =
  | { type: 'SET_ENROLLMENT_ERRORS'; payload: EnrollmentErrors }
  | { type: 'CLEAR_ENROLLMENT_ERRORS' };

export const initialEnrollmentErrorsState: EnrollmentErrorsState = { studentAddress: {}, billingAddress: {} };

export function enrollmentErrorsReducer(state: EnrollmentErrorsState, action: EnrollmentErrorsAction): EnrollmentErrorsState {
  switch (action.type) {
    case 'SET_ENROLLMENT_ERRORS':
      return action.payload;
    case 'CLEAR_ENROLLMENT_ERRORS':
      return { ...initialEnrollmentErrorsState };
    default:
      return state;
  }
}
