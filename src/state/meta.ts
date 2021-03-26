export type MetaState = {
  student: boolean;
  studentDiscount: boolean;
  promoCode: string;
  promoCodeInputValue: string;
};

export type MetaAction =
  | { type: 'SET_STUDENT'; payload: boolean }
  | { type: 'SET_STUDENT_DISCOUNT'; payload: boolean }
  | { type: 'SET_PROMO_CODE'; payload: string }
  | { type: 'CLEAR_PROMO_CODE' }
  | { type: 'SET_PROMO_CODE_INPUT_VALUE'; payload: string };

export const initialMetaState: MetaState = {
  student: false,
  studentDiscount: false,
  promoCode: '',
  promoCodeInputValue: '',
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
    case 'SET_PROMO_CODE': {
      const promoCode = action.payload.toLocaleUpperCase();
      return {
        ...state,
        promoCodeInputValue: promoCode,
        promoCode,
      };
    }
    case 'CLEAR_PROMO_CODE':
      return {
        ...state,
        promoCode: '',
      };
    case 'SET_PROMO_CODE_INPUT_VALUE':
      return {
        ...state,
        promoCodeInputValue: action.payload.toLocaleUpperCase(),
      };
    default:
      return state;
  }
}
