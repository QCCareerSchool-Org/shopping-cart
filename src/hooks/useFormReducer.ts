import { useReducer } from 'react';

export type Course = {
  code: string;
  name: string;
};

export type FormState = {
  availableCourses: Course[];
  selectedCourses: string[];
  address: {
    countryCode: string;
    provinceCode: string | null;
    firstName: string;
    lastName: string;
  };
}

export type FormAction =
  | { type: 'SET_COUNTRY_CODE'; payload: { countryCode: string; provinceCode?: string } }
  | { type: 'SET_PROVINCE_CODE'; payload: string | null }
  | { type: 'SET_FIRST_NAME'; payload: string }
  | { type: 'SET_LAST_NAME'; payload: string }
  | { type: 'CLEAR_COUNTRY' };

const initialState: FormState = {
  availableCourses: [
    { code: 'MZ', name: 'Master Makeup Artistry' },
    { code: 'MK', name: 'Makeup Artistry' },
  ],
  selectedCourses: [],
  address: {
    countryCode: 'US',
    provinceCode: 'MD',
    firstName: '',
    lastName: '',
  },
};

function reducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_COUNTRY_CODE':
      return {
        ...state,
        address: {
          ...state.address,
          countryCode: action.payload.countryCode,
          provinceCode: action.payload.provinceCode ?? null,
        },
      };
    case 'SET_PROVINCE_CODE':
      return {
        ...state,
        address: {
          ...state.address,
          provinceCode: action.payload,
        },
      };
    case 'SET_FIRST_NAME':
      return {
        ...state,
        address: {
          ...state.address,
          firstName: action.payload,
        },
      };
    case 'SET_LAST_NAME':
      return {
        ...state,
        address: {
          ...state.address,
          lastName: action.payload,
        },
      };
    default:
      throw Error();
  }
}

export const useFormReducer = (): readonly [FormState, React.Dispatch<FormAction>] => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  return [ state, dispatch ] as const;
};
