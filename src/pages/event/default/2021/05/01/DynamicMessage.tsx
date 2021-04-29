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

export const DynamicMessage20210501: React.FC<Props> = ({ courses }) => {
  if (courses.includes('EP') && courses.includes('DW') && courses.includes('LW')) {
    return <p className="mt-4 alert alert-success">Get the <strong>Destination Wedding Planning</strong> and <strong>Luxury Wedding Planning</strong> courses free when you enroll in the <strong>Event &amp; Wedding Planning</strong> course</p>;
  }
  if (!courses.includes('EP') && (courses.includes('DW') || courses.includes('LW'))) {
    return <p className="mt-4 alert alert-danger">Get the <strong>Destination Wedding Planning</strong> and <strong>Luxury Wedding Planning</strong> courses free when you enroll in the <strong>Event &amp; Wedding Planning</strong> course</p>;
  }
  if (courses.includes('EP') && !(courses.includes('DW') && courses.includes('LW'))) {
    return <p className="mt-4 alert alert-danger">Don&apos;t forget to select your free <strong>Destination Wedding Planning</strong> and <strong>Luxury Wedding Planning</strong> courses</p>;
  }
  return null;
};
