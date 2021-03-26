import { needsProvince } from '@qccareerschool/helper-functions';
import axios from 'axios';
import combineReducers from 'react-combine-reducers';

import { AddressState, AddressAction, addressReducer, initialAddressState, Province } from './address';
import { CoursesState, CoursesAction, coursesReducer, initialCoursesState } from './courses';
import { EnrollmentErrorsState, EnrollmentErrorsAction, enrollmentErrorsReducer, initialEnrollmentErrorsState } from './enrollmentErrors';
import { MetaState, MetaAction, metaReducer, initialMetaState } from './meta';
import { initialOverridesState, OverridesAction, overridesReducer, OverridesState } from './overrides';
import { PaymentState, PaymentAction, paymentReducer, initialPaymentState } from './payment';
import { PriceAction, priceReducer, PriceState, initialPriceState } from './price';
import { ProvincesAction, ProvincesState, provincesReducer, initialProvincesState } from './provinces';

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

export const dispatchMiddleware = (dispatch: React.Dispatch<Action>): React.Dispatch<Action> => action => {
  switch (action.type) {
    case 'SET_COUNTRY_CODE': {
      return fetchProvinces(action.payload.countryCode).then(
        provinces => {
          dispatch({ type: 'SET_PROVINCES', payload: { provinces } });
          const provinceCode =  provinces.length === 0 ? undefined : provinces.find(p => p.code === action.payload.provinceCode)?.code ?? provinces[0].code;
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

const fetchProvinces = async (countryCode: string): Promise<Province[]> => {
  if (!needsProvince(countryCode)) {
    return [];
  }
  const response = await axios.get<Province[]>('https://api.qccareerschool.com/geoLocation/provinces/', { params: { countryCode } });
  return response.data;
};
