export type Course = {
  code: string;
  name: string;
  heading?: string;
  selected: boolean;
  disabled: boolean;
  hidden: boolean;
  disabledMessage?: JSX.Element;
};

export type CourseGroup = {
  name?: string;
  items: Course[];
}

export type CoursesState = CourseGroup[];

export type CoursesAction =
  | { type: 'ADD_COURSE'; payload: string }
  | { type: 'REMOVE_COURSE'; payload: string };

export const initialCoursesState: CoursesState = [
  {
    name: 'Foundation Courses',
    items: [
      {
        code: 'MZ',
        name: 'Master Makeup Artisty',
        selected: false,
        disabled: false,
        hidden: false,
      },
      {
        code: 'MK',
        name: 'Makeup Artisty',
        selected: false,
        disabled: false,
        hidden: false,
      },
    ],
  },
];

export function coursesReducer(state: CoursesState, action: CoursesAction): CoursesState {
  switch (action.type) {
    case 'ADD_COURSE':
      return state.map(g => ({ ...g, items: g.items.map(c => c.code === action.payload ? { ...c, selected: true } : { ...c }) }));
    case 'REMOVE_COURSE':
      return state.map(g => ({ ...g, items: g.items.map(c => c.code === action.payload ? { ...c, selected: false } : { ...c }) }));
    default:
      return state;
  }
}

/**
 * Returns an array of the selected course codes
 */
export const getSelectedCourses = (courses: CoursesState): string[] => {
  return courses.flatMap(g => g.items.filter(c => c.selected).map(c => c.code));
};
