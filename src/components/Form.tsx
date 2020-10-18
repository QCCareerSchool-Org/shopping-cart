import React, { useState } from 'react';

import { useStateContext } from '../hooks/useStateContext';
import { useGeoLocation } from '../hooks/useGeoLocation';
import { usePriceUpdater } from '../hooks/usePriceUpdater';

import { Address } from './Address';
import { Summary } from './Summary';
import { CourseSelection } from './CourseSelection';
import { Payment } from './Payment';
import { CourseGroup } from '../state/courses';

export type Props = {
  courseGroups: CourseGroup[];
  student?: boolean;
}

export const Form: React.FC<Props> = props => {
  const state = useStateContext();

  useGeoLocation(); // set initial country and province based on ip

  usePriceUpdater(); // update prices when courses, country, etc. change

  const [ student, setStudent ] = useState(props.student ?? false);

  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    //
  };

  return (
    <>
      <CourseSelection />
      <Address />
      <Payment />
      <Summary />
      <button onClick={submit}>Enroll</button>
      <pre>{JSON.stringify(state, null, ' ')}</pre>
    </>
  );
};
