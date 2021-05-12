export type Province = { code: string; name: string };

export type ProvincesState = {
  provinces: Province[];
  error: Error | null;
};

export type ProvincesAction =
  | { type: 'SET_PROVINCES'; payload: { provinces: Province[] } }
  | { type: 'SET_PROVINCE_ERROR'; payload: Error };

export const initialProvincesState: ProvincesState = {
  provinces: [ { code: 'MD', name: 'Maryland' } ],
  error: null,
};

export function provincesReducer(state: ProvincesState, action: ProvincesAction): ProvincesState {
  switch (action.type) {
    case 'SET_PROVINCES':
      return {
        ...state,
        provinces: action.payload.provinces,
        error: null,
      };
    case 'SET_PROVINCE_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
