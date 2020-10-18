import React, { useEffect } from 'react';

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

export type School = 'QC Makeup Academy' | 'QC Event School' | 'QC Design School' | 'QC Pet Studies';

export type Props = {
  courseGroups: CourseGroup[];
  school: School;
  /** the guarantee component to display in the summary section */
  guarantee: () => JSX.Element;
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
  const state = useStateContext();
  const dispatch = useDispatchContext();

  useGeoLocation(); // set initial country and province based on ip

  usePriceUpdater(); // update prices when courses, country, etc. change

  useGoogleAnalyticsBehaviour();

  useInitialData(); // load initial data from sessionStorage and query string

  useEffect(() => {
    dispatch({ type: 'SET_STUDENT', payload: !!props.student });
  }, [ props.student ]);

  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    //
  };

  return (
    <>
      {props.internal && <Internal />}
      <CourseSelection courseGroups={props.courseGroups} />
      <Address />
      <Payment school={props.school} allowNoShipping={!!props.allowNoShipping} greenDiscount={props.greenDiscount} />
      {props.allowOverrides && <Overrides />}
      <Summary guarantee={props.guarantee} />
      <button onClick={submit}>Enroll</button>
      <pre>{JSON.stringify(state, null, ' ')}</pre>
    </>
  );
};
