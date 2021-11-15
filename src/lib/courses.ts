const makeupFoundationCourses = [ 'MM', 'MA', 'MZ', 'MK', 'SK', 'PA' ];
const makeupAdvancedCourses = [ 'MW', 'GB', 'PW' ];
const makeupSpecialtyCourses = [ 'AB', 'SF', 'HS', 'PF', 'VM' ];

const designCourses = [ 'I2', 'ST', 'PO', 'FS', 'CC', 'AP', 'DB', 'MS', 'VD', 'FD', 'LD' ];

const eventFoundationCourses = [ 'EP', 'CP', 'CE', 'WP', 'FD' ];
const eventSpecialtyCourses = [ 'ED', 'EB', 'LW', 'DW', 'FL', 'PE', 'TT', 'TG', 'VE' ];

export const isMakeupFoundationCourse = (course: string, exclude?: string[]): boolean => {
  return makeupFoundationCourses.filter(c => !exclude?.includes(c)).includes(course);
};

export const isMakeupAdvancedCourse = (course: string, exclude?: string[]): boolean => {
  return makeupAdvancedCourses.filter(c => !exclude?.includes(c)).includes(course);
};

export const isMakeupSpecialtyCourse = (course: string, exclude?: string[]): boolean => {
  return makeupSpecialtyCourses.filter(c => !exclude?.includes(c)).includes(course);
};

export const isMakeupCourse = (course: string, exclude?: string[]): boolean => {
  return isMakeupFoundationCourse(course, exclude) || isMakeupAdvancedCourse(course, exclude) || isMakeupSpecialtyCourse(course, exclude);
};

export const isDesignCourse = (course: string, exclude?: string[]): boolean => {
  return designCourses.filter(c => !exclude?.includes(c)).includes(course);
};

export const isEventFoundationCourse = (course: string, exclude?: string[]): boolean => {
  return eventFoundationCourses.filter(c => !exclude?.includes(c)).includes(course);
};

export const isEventSpecialtyCourse = (course: string, exclude?: string[]): boolean => {
  return eventSpecialtyCourses.filter(c => !exclude?.includes(c)).includes(course);
};

export const isEventCourse = (course: string, exclude?: string[]): boolean => {
  return isEventFoundationCourse(course, exclude) || isEventSpecialtyCourse(course, exclude);
};
