import React, { useEffect, useState } from 'react';

import { useStateContext } from '../hooks/useStateContext';
import { useGeoLocation } from '../hooks/useGeoLocation';
import { usePriceUpdater } from '../hooks/usePriceUpdater';

import { Address } from './Address';
import { Summary } from './Summary';
import { CourseGroup, CourseSelection } from './CourseSelection';
import { Payment } from './Payment';
import { useGoogleAnalyticsBehaviour } from '../hooks/useGoogleAnalyticsBehaviour';
import { useInitialData } from '../hooks/useInitialData';
import { Internal } from './Internal';
import { useDispatchContext } from '../hooks/useDispatchContext';
import { Overrides } from './Overrides';

export type Props = {
  courseGroups: CourseGroup[];
  guarantee: () => JSX.Element;
  internal?: boolean;
  student?: boolean;
  allowOverrides?: boolean;
}

export const Form: React.FC<Props> = props => {
  const state = useStateContext();
  const dispatch = useDispatchContext();

  useGeoLocation(); // set initial country and province based on ip

  usePriceUpdater(); // update prices when courses, country, etc. change

  useGoogleAnalyticsBehaviour();

  useInitialData(); // load initial data from sessionStorage and query string

  useEffect(() => {
    dispatch({ type: 'SET_STUDENT', payload: props.student ?? false });
  }, [ props.student ]);

  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    //
  };

  return (
    <>
      {props.internal && <Internal />}
      <CourseSelection courseGroups={props.courseGroups} />
      <Address />
      <Payment />
      {props.allowOverrides && <Overrides />}
      <Summary guarantee={props.guarantee} />
      <button onClick={submit}>Enroll</button>
    </>
  );
};
