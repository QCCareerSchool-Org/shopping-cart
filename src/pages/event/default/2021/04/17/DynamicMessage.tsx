import React from 'react';

type Props = {
  courses: string[];
}

const eventFoundationCourses = [ 'EP', 'CP', 'CE', 'WP', 'FD' ];
const eventSpecialtyCourses = [ 'ED', 'EB', 'LW', 'DW', 'FL', 'PE', 'TT', 'TG', 'VE' ];

const isEventFoundationCourse = (course: string, exclude?: string[]): boolean => {
  return eventFoundationCourses.filter(c => !exclude?.includes(c)).includes(course);
};

const isEventSpecialtyCourse = (course: string, exclude?: string[]): boolean => {
  return eventSpecialtyCourses.filter(c => !exclude?.includes(c)).includes(course);
};

export const DynamicMessage20210406: React.FC<Props> = ({ courses }) => {
  if (!courses.some(c => isEventFoundationCourse(c)) && courses.some(c => isEventSpecialtyCourse(c))) {
    return <p className="mt-4 alert alert-danger">Get a <strong>free Specialty course</strong> when you enroll in any <strong>Foundation course</strong></p>;
  }
  if (courses.some(c => isEventFoundationCourse(c)) && !courses.some(c => isEventSpecialtyCourse(c))) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your <strong>free Specialty course</strong></p>;
  }
  if (courses.some(c => isEventFoundationCourse(c)) && courses.some(c => isEventSpecialtyCourse(c))) {
    return <p className="mt-4 alert alert-success">Get a <strong>free Specialty course</strong> when you enroll in any <strong>Foundation course</strong></p>;
  }
  return null;
};
