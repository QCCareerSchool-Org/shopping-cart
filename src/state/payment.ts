export type PaymentPlan = 'full' | 'part';

export type PaymentState = {
  plan: PaymentPlan;
  day: number;
  noShipping: boolean;
}

export type PaymentAction =
  | { type: 'SET_PLAN'; payload: PaymentPlan }
  | { type: 'SET_DATE'; payload: number }
  | { type: 'SET_NO_SHIPPING'; payload: boolean };

export const initialPaymentState: PaymentState = {
  plan: 'part',
  day: new Date().getDate(),
  noShipping: false,
};

export function paymentReducer(state: PaymentState, action: PaymentAction): PaymentState {
  switch (action.type) {
    case 'SET_PLAN':
      return { ...state, plan: action.payload };
    case 'SET_DATE':
      return { ...state, day: action.payload };
    case 'SET_NO_SHIPPING':
      return { ...state, noShipping: action.payload };
    default:
      return state;
  }
}
