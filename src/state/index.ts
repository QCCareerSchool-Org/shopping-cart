import { needsProvince } from '@qccareerschool/helper-functions';
import axios from 'axios';
import combineReducers from 'react-combine-reducers';

import { AddressAction, addressReducer, AddressState, initialAddressState, Province } from './address';
import { BillingAddressAction, billingAddressReducer, BillingAddressState, initialBillingAddressState } from './billingAddress';
import { CountriesAction, countriesReducer, CountriesState, initialCountriesState } from './countries';
import { CoursesAction, coursesReducer, CoursesState, initialCoursesState } from './courses';
import { EnrollmentErrorsAction, enrollmentErrorsReducer, EnrollmentErrorsState, initialEnrollmentErrorsState } from './enrollmentErrors';
import { initialMetaState, MetaAction, metaReducer, MetaState } from './meta';
import { initialOverridesState, OverridesAction, overridesReducer, OverridesState } from './overrides';
import { initialPaymentState, PaymentAction, paymentReducer, PaymentState } from './payment';
import { initialPriceState, PriceAction, priceReducer, PriceState } from './price';

export type State = {
  address: AddressState;
  billingAddress: BillingAddressState;
  courses: CoursesState;
  countries: CountriesState;
  payment: PaymentState;
  price: PriceState;
  overrides: OverridesState;
  meta: MetaState;
  enrollmentErrors: EnrollmentErrorsState;
};

export type Action = AddressAction | BillingAddressAction | CoursesAction | CountriesAction | PaymentAction | PriceAction | OverridesAction | MetaAction | EnrollmentErrorsAction;

export type Reducer = (state: State, action: Action) => State;

export const [ reducer, initialState ] = combineReducers<Reducer>({
  address: [ addressReducer, initialAddressState ],
  billingAddress: [ billingAddressReducer, initialBillingAddressState ],
  courses: [ coursesReducer, initialCoursesState ],
  countries: [ countriesReducer, initialCountriesState ],
  payment: [ paymentReducer, initialPaymentState ],
  price: [ priceReducer, initialPriceState ],
  overrides: [ overridesReducer, initialOverridesState ],
  meta: [ metaReducer, initialMetaState ],
  enrollmentErrors: [ enrollmentErrorsReducer, initialEnrollmentErrorsState ],
});

const fetchProvinces = async (countryCode: string): Promise<Province[]> => {
  if (!needsProvince(countryCode)) {
    return [];
  }
  const response = await axios.get<Province[]>('https://api.qccareerschool.com/geoLocation/provinces/', { params: { countryCode } });
  return response.data;
};

export const dispatchMiddleware = (dispatch: React.Dispatch<Action>): React.Dispatch<Action> => (action): void | Promise<void> => {
  switch (action.type) {
    case 'SET_COUNTRY_CODE': {
      return fetchProvinces(action.payload.countryCode).then(
        provinces => {
          dispatch({ type: 'SET_PROVINCES', payload: provinces });
          const provinceCode = provinces.length === 0 ? undefined : provinces.find(p => p.code === action.payload.provinceCode)?.code ?? provinces[0].code;
          dispatch({ ...action, payload: { ...action.payload, provinceCode } }); // replace the provinceCode for the original dispatch with one that we know is good
        },
        console.error,
      );
    }
    case 'SET_BILLING_COUNTRY_CODE': {
      return fetchProvinces(action.payload.countryCode).then(
        provinces => {
          dispatch({ type: 'SET_BILLING_PROVINCES', payload: provinces });
          const provinceCode = provinces.length === 0 ? undefined : provinces.find(p => p.code === action.payload.provinceCode)?.code ?? provinces[0].code;
          dispatch({ ...action, payload: { ...action.payload, provinceCode } }); // replace the provinceCode for the original dispatch with one that we know is good
        },
        console.error,
      );
    }
    default:
      return dispatch(action);
  }
};
