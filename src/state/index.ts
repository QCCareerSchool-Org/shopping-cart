import { needsProvince } from '@qccareerschool/helper-functions';
import axios from 'axios';
import combineReducers from 'react-combine-reducers';

import { AddressAction, addressReducer, AddressState, initialAddressState, Province } from './address';
import { CoursesAction, coursesReducer, CoursesState, initialCoursesState } from './courses';
import { EnrollmentErrorsAction, enrollmentErrorsReducer, EnrollmentErrorsState, initialEnrollmentErrorsState } from './enrollmentErrors';
import { initialMetaState, MetaAction, metaReducer, MetaState } from './meta';
import { initialOverridesState, OverridesAction, overridesReducer, OverridesState } from './overrides';
import { initialPaymentState, PaymentAction, paymentReducer, PaymentState } from './payment';
import { initialPriceState, PriceAction, priceReducer, PriceState } from './price';
import { initialProvincesState, ProvincesAction, provincesReducer, ProvincesState } from './provinces';

export type State = {
  address: AddressState;
  courses: CoursesState;
  provinces: ProvincesState;
  payment: PaymentState;
  price: PriceState;
  overrides: OverridesState;
  meta: MetaState;
  enrollmentErrors: EnrollmentErrorsState;
};

export type Action = AddressAction | CoursesAction | ProvincesAction | PaymentAction | PriceAction | OverridesAction | MetaAction | EnrollmentErrorsAction;

export type Reducer = (state: State, action: Action) => State;

export const [ reducer, initialState ] = combineReducers<Reducer>({
  address: [ addressReducer, initialAddressState ],
  courses: [ coursesReducer, initialCoursesState ],
  provinces: [ provincesReducer, initialProvincesState ],
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
          dispatch({ type: 'SET_PROVINCES', payload: { provinces } });
          const provinceCode = provinces.length === 0 ? undefined : provinces.find(p => p.code === action.payload.provinceCode)?.code ?? provinces[0].code;
          dispatch({ ...action, payload: { ...action.payload, provinceCode } }); // replace the provinceCode for the original dispatch with one that we know is good
        },
        err => {
          console.error(err); //eslint-disable-line
          dispatch({ type: 'SET_PROVINCE_ERROR', payload: err });
        },
      );
    }
    default:
      return dispatch(action);
  }
};
