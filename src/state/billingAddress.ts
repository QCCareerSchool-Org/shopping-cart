export type Title = 'Mrs.' | 'Miss' | 'Ms.' | 'Mr.';

export type BillingAddressState = {
  /** whether to reuse the shipping address or not */
  sameAsShipping: boolean;
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

export type Province = { code: string; name: string };

export type BillingAddressAction =
  | { type: 'SET_BILLING_DISABLED'; payload: boolean }
  | { type: 'SET_BILLING_COUNTRY_CODE'; payload: { countryCode: string; provinceCode?: string; manual: boolean } }
  | { type: 'SET_BILLING_PROVINCES'; payload: Province[] }
  | { type: 'SET_BILLING_PROVINCE_CODE'; payload: { provinceCode: string | null; manual: boolean } }
  | { type: 'SET_BILLING_TITLE'; payload: Title }
  | { type: 'SET_BILLING_FIRST_NAME'; payload: string }
  | { type: 'SET_BILLING_LAST_NAME'; payload: string }
  | { type: 'SET_BILLING_EMAIL_ADDRESS'; payload: string }
  | { type: 'SET_BILLING_TELEPHONE_NUMBER'; payload: string }
  | { type: 'SET_BILLING_CITY'; payload: string }
  | { type: 'SET_BILLING_ADDRESS1'; payload: string }
  | { type: 'SET_BILLING_ADDRESS2'; payload: string }
  | { type: 'SET_BILLING_POSTAL_CODE'; payload: string };

export const initialBillingAddressState: BillingAddressState = {
  sameAsShipping: true,
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

export function billingAddressReducer(state: BillingAddressState, action: BillingAddressAction): BillingAddressState {
  switch (action.type) {
    case 'SET_BILLING_DISABLED':
      return { ...state, sameAsShipping: action.payload };
    case 'SET_BILLING_COUNTRY_CODE':
      return {
        ...state,
        countryCode: action.payload.countryCode,
        provinceCode: action.payload.provinceCode ?? null,
        locationModified: action.payload.manual ? true : state.locationModified,
      };
    case 'SET_BILLING_PROVINCES':
      return { ...state, provinces: action.payload };
    case 'SET_BILLING_PROVINCE_CODE':
      return {
        ...state,
        provinceCode: action.payload.provinceCode,
        locationModified: action.payload.manual ? true : state.locationModified,
      };
    case 'SET_BILLING_TITLE':
      return {
        ...state,
        title: action.payload,
      };
    case 'SET_BILLING_FIRST_NAME':
      return {
        ...state,
        firstName: action.payload,
      };
    case 'SET_BILLING_LAST_NAME':
      return {
        ...state,
        lastName: action.payload,
      };
    case 'SET_BILLING_EMAIL_ADDRESS':
      return {
        ...state,
        emailAddress: action.payload,
      };
    case 'SET_BILLING_TELEPHONE_NUMBER':
      return {
        ...state,
        telephoneNumber: action.payload,
      };
    case 'SET_BILLING_ADDRESS1':
      return {
        ...state,
        address1: action.payload,
      };
    case 'SET_BILLING_ADDRESS2':
      return {
        ...state,
        address2: action.payload,
      };
    case 'SET_BILLING_CITY':
      return {
        ...state,
        city: action.payload,
      }; case 'SET_BILLING_POSTAL_CODE':
      return {
        ...state,
        postalCode: action.payload,
      };
    default:
      return state;
  }
}
