export type MetaState = {
  student: boolean;
  studentDiscount: boolean;
  promoCode: string;
};

export type MetaAction =
  | { type: 'SET_STUDENT'; payload: boolean }
  | { type: 'SET_STUDENT_DISCOUNT'; payload: boolean }
  | { type: 'SET_PROMO_CODE'; payload: string };

export const initialMetaState: MetaState = {
  student: false,
  studentDiscount: false,
  promoCode: '',
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
    case 'SET_PROMO_CODE':
      return {
        ...state,
        promoCode: action.payload,
      };
    default:
      return state;
  }
}
