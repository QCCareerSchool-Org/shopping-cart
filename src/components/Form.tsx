import React, { useEffect } from 'react';

import { useGeoLocation } from '../hooks/useGeoLocation';
import { usePriceUpdater } from '../hooks/usePriceUpdater';
import { useInitialData } from '../hooks/useInitialData';
import { useDispatchContext } from '../hooks/useDispatchContext';
import { useGoogleAnalyticsBehaviour } from '../hooks/useGoogleAnalyticsBehaviour';

import { CourseGroup } from '../state/courses';

import { Address } from './Address';
import { Summary } from './Summary';
import { Payment } from './Payment';
import { Internal } from './Internal';
import { Overrides } from './Overrides';
import { CourseSelection } from './CourseSelection';

export type School = 'QC Makeup Academy' | 'QC Event School' | 'QC Design School' | 'QC Pet Studies';

export type Props = {
  courseGroups: CourseGroup[];
  school: School;
  /** the guarantee component to display in the summary section */
  guarantee: () => JSX.Element;
  /** a component to display below the courses title */
  coursesSubtitle?: () => JSX.Element;
  /** an array of components to display below the course selection checkboxes */
  dynamicCourseMessages?: Array<() => JSX.Element>;
  /** whether this is an internal shopping cart (allows toggling student status) */
  internal?: boolean;
  /** whether the person enrolling is an existing student or not */
  student?: boolean;
  /** whether we allow overriding the deposit and installments */
  allowOverrides?: boolean;
  /** allow students to choose the no-shiping discount */
  allowNoShipping?: boolean;
  /** the name for the no-shipping discount */
  greenDiscount?: string;
}

export const Form: React.FC<Props> = props => {
  const dispatch = useDispatchContext();

  useGeoLocation(); // set initial country and province based on ip

  usePriceUpdater(); // update prices when courses, country, etc. change

  useGoogleAnalyticsBehaviour();

  useEffect(() => {
    dispatch({ type: 'SET_COURSE_GROUPS', payload: props.courseGroups });
  }, [ props.courseGroups ]);

  useEffect(() => {
    dispatch({ type: 'CLEAR_COURSES', payload: { internal: !!props.internal } });
  }, []);

  useInitialData(!!props.internal); // load initial data from sessionStorage and query string

  useEffect(() => {
    dispatch({ type: 'SET_STUDENT', payload: !!props.student });
  }, [ props.student ]);

  return (
    <>
      {props.internal && <Internal />}
      <CourseSelection
        internal={!!props.internal}
        coursesSubtitle={props.coursesSubtitle}
        dynamicCourseMessages={props.dynamicCourseMessages}
      />
      <Address />
      <Payment
        school={props.school}
        allowNoShipping={!!props.allowNoShipping}
        greenDiscount={props.greenDiscount}
      />
      {props.allowOverrides && <Overrides />}
      <Summary guarantee={props.guarantee} />
    </>
  );
};
