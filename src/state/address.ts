export type AddressState = {
  countryCode: string;
  provinceCode: string | null;
  firstName: string;
  lastName: string;
};

export type AddressAction =
  | { type: 'SET_COUNTRY_CODE'; payload: { countryCode: string; provinceCode?: string } }
  | { type: 'SET_PROVINCE_CODE'; payload: string | null }
  | { type: 'SET_FIRST_NAME'; payload: string }
  | { type: 'SET_LAST_NAME'; payload: string };

export const initialAddressState: AddressState = {
  countryCode: 'US',
  provinceCode: 'MD',
  firstName: '',
  lastName: '',
};

export function addressReducer(state: AddressState, action: AddressAction): AddressState {
  switch (action.type) {
    case 'SET_COUNTRY_CODE':
      return {
        ...state,
        countryCode: action.payload.countryCode,
        provinceCode: action.payload.provinceCode ?? null,
      };
    case 'SET_PROVINCE_CODE':
      return {
        ...state,
        provinceCode: action.payload,
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
    default:
      return state;
  }
}
