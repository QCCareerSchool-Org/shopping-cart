export type CoursesState = {
  selected: string[];
  disabled: string[];
  hidden: string[];
}

export type CoursesAction =
  | { type: 'ADD_COURSE'; payload: string }
  | { type: 'REMOVE_COURSE'; payload: string };

export const initialCoursesState: CoursesState = {
  selected: [],
  disabled: [],
  hidden: [],
};

export function coursesReducer(state: CoursesState, action: CoursesAction): CoursesState {
  switch (action.type) {
    case 'ADD_COURSE':
      return {
        ...state,
        selected: [ ...state.selected, action.payload ],
      };
    case 'REMOVE_COURSE':
      return {
        ...state,
        selected: state.selected.filter(s => s !== action.payload),
      };
    default:
      return state;
  }
}
