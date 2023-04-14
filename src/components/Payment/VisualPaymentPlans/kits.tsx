type CourseKit = { courseCode: string; full?: any; part?: any; height: number; buttonOffset: number };

export const courseKits: CourseKit[] = [
  { courseCode: 'MZ', full: require('./mz-full.jpg'), part: require('./mz-part.jpg'), height: 199, buttonOffset: 92 },
];
