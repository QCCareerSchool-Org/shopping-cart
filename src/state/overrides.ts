import Big from 'big.js';
import { round } from '../lib/round';

type Data = {
  min: number;
  max: number;
  default: number;
  value: number;
};

type CourseData = Data & {
  code: string;
  name: string;
};

export type OverridesState = Data & {
  courses: CourseData[];
  maxInstallments: number;
  defaultInstallments: number;
  installments: number;
};

export type OverridesAction =
  | { type: 'INITIALIZE_OVERRIDES'; payload: { installments: number; courses: CourseData[] } }
  | { type: 'RESET_OVERRIDES' }
  | { type: 'SET_OVERRIDE_VALUE'; payload: { value: number } }
  | { type: 'SET_OVERRIDE_COURSE_VALUE'; payload: { code: string; value: number } }
  | { type: 'SET_OVERRIDE_INSTALLMENTS'; payload: { installments: number } };

export const initialOverridesState: OverridesState = {
  min: 0,
  max: 0,
  default: 0,
  value: 0,
  courses: [],
  maxInstallments: 20,
  defaultInstallments: 1,
  installments: 1,
};

export const overridesReducer = (state: OverridesState, action: OverridesAction): OverridesState => {
  const sum = (numbers: number[]): number => {
    return parseFloat(numbers.reduce((prev, cur) => prev.plus(cur), Big(0)).toFixed(2));
  };
  switch (action.type) {
    case 'INITIALIZE_OVERRIDES': {
      return {
        min: sum(action.payload.courses.map(c => c.min)),
        max: sum(action.payload.courses.map(c => c.max)),
        default: sum(action.payload.courses.map(c => c.default)),
        value: sum(action.payload.courses.map(c => c.value)),
        courses: action.payload.courses.map(c => ({ ...c })),
        maxInstallments: 20,
        defaultInstallments: action.payload.installments,
        installments: state.defaultInstallments === action.payload.installments ? state.installments : action.payload.installments, // update if default changed
      };
    }
    case 'RESET_OVERRIDES': {
      return {
        ...state,
        value: state.default,
        courses: state.courses.map(c => ({ ...c, value: c.default })),
        installments: state.defaultInstallments,
      };
    }
    case 'SET_OVERRIDE_VALUE': {
      let value = round(action.payload.value); // the new value
      if (value > state.max) {
        value = state.max;
      } else if (value < state.min) {
        value = state.min;
      }
      if (value >= state.default) { // update the individual courses' values in proportion to the difference between their default and max values
        const ratio = (value - state.default) / (state.max - state.default);
        let remainderIndex: number;
        const courses = state.courses.map((c, i) => {
          if (c.max === 0) {
            return { ...c, value: 0 };
          }
          // pick the first "non-zero" course to be our remainder course
          if (typeof remainderIndex === 'undefined') {
            remainderIndex = i;
          }
          if (i === remainderIndex) { // don't modify our remainder course
            return { ...c };
          } // update the other courses
          const available = c.max - c.default;
          return { ...c, value: round((available * ratio) + c.default) };

        }).map((c, i, a) => {
          if (i === remainderIndex) { // update the remaining course
            // sum the values of the other courses, which we already updated
            const otherCoursesValue = sum(a.filter((_, j) => j !== i).map(o => o.value));
            // set the value of this course to whatever remainder is left over (to prevent rounding errors)
            return { ...c, value: round(value - otherCoursesValue) };
          } // skip the other courses
          return { ...c };

        });
        return { ...state, value, courses };
      } // update the individual courses' values in proportion to the difference between their min and default values
      const ratio = (value - state.min) / (state.default - state.min);
      let remainderIndex: number;
      const courses = state.courses.map((c, i) => {
        if (c.max === 0) {
          return { ...c, value: 0 };
        }
        // pick the first "non-zero" course to be our remainder course
        if (typeof remainderIndex === 'undefined') {
          remainderIndex = i;
        }
        if (i === remainderIndex) { // don't modify our remainder course
          return { ...c };
        } // update the other courses
        const available = c.default - c.min;
        return { ...c, value: round((available * ratio) + c.min) };

      }).map((c, i, a) => {
        if (i === a.length - 1) { // update the remaining course
          // sum the values of the other courses, which we already updated
          const otherCoursesValue = sum(a.filter((_, j) => j !== i).map(o => o.value));
          // set the value of this course to whatever remainder is left over (to prevent rounding errors)
          return { ...c, value: round(value - otherCoursesValue) };
        } // skip the first n-1 courses
        return { ...c };

      });
      return { ...state, value, courses };

    }
    case 'SET_OVERRIDE_COURSE_VALUE': {
      const courses = state.courses.map(c => ({ ...c }));
      const course = courses.find(c => c.code === action.payload.code);
      if (typeof course === 'undefined') {
        throw Error('Course code not found');
      }
      let courseValue = round(action.payload.value);
      if (courseValue > course.max) {
        courseValue = course.max;
      } else if (courseValue < course.min) {
        courseValue = course.min;
      }
      course.value = courseValue;
      const value = sum(courses.map(c => c.value));
      return { ...state, value, courses };
    }
    case 'SET_OVERRIDE_INSTALLMENTS': {
      let installments = action.payload.installments;
      if (installments < 1) {
        installments = 1;
      } else if (installments > state.maxInstallments) {
        installments = state.maxInstallments;
      }
      return {
        ...state,
        courses: state.courses.map(c => ({ ...c })),
        installments,
      };
    }
    default: {
      return state;
    }
  }
};
