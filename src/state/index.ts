import combineReducers from 'react-combine-reducers';

import { AddressState, AddressAction, addressReducer, initialAddressState } from './address';
import { CoursesState, CoursesAction, coursesReducer, initialCoursesState } from './courses';
import { EnrollmentErrorsState, EnrollmentErrorsAction, enrollmentErrorsReducer, initialEnrollmentErrorsState } from './enrollmentErrors';
import { MetaState, MetaAction, metaReducer, initialMetaState } from './meta';
import { PaymentState, PaymentAction, paymentReducer, initialPaymentState } from './payment';
import { PriceAction, priceReducer, PriceState, initialPriceState } from './price';

export type State = {
  address: AddressState;
  courses: CoursesState;
  payment: PaymentState;
  price: PriceState;
  meta: MetaState;
  enrollmentErrors: EnrollmentErrorsState;
};

export type Action = AddressAction | CoursesAction | PaymentAction | PriceAction | MetaAction | EnrollmentErrorsAction;

export type Reducer = (state: State, action: Action) => State;

export const [ reducer, initialState ] = combineReducers<Reducer>({
  address: [ addressReducer, initialAddressState ],
  courses: [ coursesReducer, initialCoursesState ],
  payment: [ paymentReducer, initialPaymentState ],
  price: [ priceReducer, initialPriceState ],
  meta: [ metaReducer, initialMetaState ],
  enrollmentErrors: [ enrollmentErrorsReducer, initialEnrollmentErrorsState ],
});
