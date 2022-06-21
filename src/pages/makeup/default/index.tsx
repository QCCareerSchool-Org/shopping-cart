import React, { ReactElement } from 'react';

import { Form } from '../../../components/Form';
import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from './DefaultPromo';
import { DynamicMessage } from './DynamicMessage';

type Props = {
  currencyCode: string;
  courses: string[];
};

const Default = ({ courses, currencyCode }: Props): ReactElement => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;

  return (
    <>
      <DefaultPromo date={date} />
      <Form
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={() => <Guarantee />}
        agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
        agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
        showDynamicCourseDescriptions={true}
        dynamicCourseMessages={[ () => <DynamicMessage date={date} courses={courses} /> ]}
        paymentOptionsReverse={true}
      />
    </>
  );
};

export default Default;
