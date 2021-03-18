export type Title = 'Mrs.' | 'Miss' | 'Ms.' | 'Mr.';

export type AddressState = {
  title: Title;
  firstName: string;
  lastName: string;
  emailAddress: string;
  telephoneNumber: string;
  address1: string;
  address2: string;
  city: string;
  provinceCode: string | null;
  postalCode: string;
  countryCode: string;
  locationModified: boolean;
  provinces: Province[];
};

export type Province = { code: string; name: string }

export type AddressAction =
  | { type: 'SET_COUNTRY_CODE_AND_PROVINCES'; payload: { countryCode: string; provinces: Province[]; provinceCode?: string; manual: boolean } }
  | { type: 'SET_COUNTRY_CODE'; payload: { countryCode: string; provinceCode?: string; manual: boolean } }
  | { type: 'SET_PROVINCE_CODE'; payload: { provinceCode: string | null; manual: boolean } }
  | { type: 'SET_TITLE'; payload: Title }
  | { type: 'SET_FIRST_NAME'; payload: string }
  | { type: 'SET_LAST_NAME'; payload: string }
  | { type: 'SET_EMAIL_ADDRESS'; payload: string }
  | { type: 'SET_TELEPHONE_NUMBER'; payload: string }
  | { type: 'SET_CITY'; payload: string }
  | { type: 'SET_ADDRESS1'; payload: string }
  | { type: 'SET_ADDRESS2'; payload: string }
  | { type: 'SET_POSTAL_CODE'; payload: string };

export const initialAddressState: AddressState = {
  title: 'Mrs.',
  firstName: '',
  lastName: '',
  emailAddress: '',
  telephoneNumber: '',
  address1: '',
  address2: '',
  city: '',
  provinceCode: 'MD',
  postalCode: '',
  countryCode: 'US',
  locationModified: false,
  provinces: [ { code: 'MD', name: 'Maryland' } ],
};

export function addressReducer(state: AddressState, action: AddressAction): AddressState {
  switch (action.type) {
    case 'SET_COUNTRY_CODE_AND_PROVINCES':
      return {
        ...state,
        countryCode: action.payload.countryCode,
        provinces: action.payload.provinces,
        provinceCode: action.payload.provinceCode ?? null,
        locationModified: action.payload.manual ? true : state.locationModified,
      };
    case 'SET_COUNTRY_CODE':
      return {
        ...state,
        countryCode: action.payload.countryCode,
        provinceCode: action.payload.provinceCode ?? null,
        locationModified: action.payload.manual ? true : state.locationModified,
      };
    case 'SET_PROVINCE_CODE':
      return {
        ...state,
        provinceCode: action.payload.provinceCode,
        locationModified: action.payload.manual ? true : state.locationModified,
      };
    case 'SET_TITLE':
      return {
        ...state,
        title: action.payload,
      };
    case 'SET_FIRST_NAME':
      return {
        ...state,
        firstName: action.payload,
      };
    case 'SET_LAST_NAME':
      return {
        ...state,
        lastName: action.payload,
      };
    case 'SET_EMAIL_ADDRESS':
      return {
        ...state,
        emailAddress: action.payload,
      };
    case 'SET_TELEPHONE_NUMBER':
      return {
        ...state,
        telephoneNumber: action.payload,
      };
    case 'SET_ADDRESS1':
      return {
        ...state,
        address1: action.payload,
      };
    case 'SET_ADDRESS2':
      return {
        ...state,
        address2: action.payload,
      };
    case 'SET_CITY':
      return {
        ...state,
        city: action.payload,
      }; case 'SET_POSTAL_CODE':
      return {
        ...state,
        postalCode: action.payload,
      };
    default:
      return state;
  }
}
