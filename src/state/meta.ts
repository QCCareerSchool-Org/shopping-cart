export type MetaState = {
  student: boolean;
  studentDiscount: boolean;
};

export type MetaAction =
  | { type: 'SET_STUDENT'; payload: boolean }
  | { type: 'SET_STUDENT_DISCOUNT'; payload: boolean };

export const initialMetaState: MetaState = {
  student: false,
  studentDiscount: false,
};

export function metaReducer(state: MetaState, action: MetaAction): MetaState {
  switch (action.type) {
    case 'SET_STUDENT':
      return {
        ...state,
        student: action.payload,
      };
    case 'SET_STUDENT_DISCOUNT':
      return {
        ...state,
        studentDiscount: action.payload,
      };
    default:
      return state;
  }
}
