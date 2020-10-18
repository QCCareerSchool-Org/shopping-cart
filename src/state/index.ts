import combineReducers from 'react-combine-reducers';

import { AddressState, AddressAction, addressReducer, initialAddressState } from './address';
import { CoursesState, CoursesAction, coursesReducer, initialCoursesState } from './courses';
import { PaymentState, PaymentAction, paymentReducer, initialPaymentState } from './payment';
import { initialPriceState, PriceAction, priceReducer, PriceState } from './price';

export type State = {
  address: AddressState;
  courses: CoursesState;
  payment: PaymentState;
  price: PriceState;
};

export type Action = AddressAction | CoursesAction | PaymentAction | PriceAction;

export type Reducer = (state: State, action: Action) => State;

export const [ reducer, initialState ] = combineReducers<Reducer>({
  address: [ addressReducer, initialAddressState ],
  courses: [ coursesReducer, initialCoursesState ],
  payment: [ paymentReducer, initialPaymentState ],
  price: [ priceReducer, initialPriceState ],
});
