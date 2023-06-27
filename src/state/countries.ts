export type Country = { code: string; name: string };

export type CountriesState = {
  countries: Country[];
  error: Error | null;
};

export type CountriesAction =
  | { type: 'SET_COUNTRIES'; payload: Country[] }
  | { type: 'SET_COUNTRIES_ERROR'; payload: Error };

export const initialCountriesState: CountriesState = {
  countries: [],
  error: null,
};

export function countriesReducer(state: CountriesState, action: CountriesAction): CountriesState {
  switch (action.type) {
    case 'SET_COUNTRIES':
      return { ...state, countries: action.payload, error: null };
    case 'SET_COUNTRIES_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
