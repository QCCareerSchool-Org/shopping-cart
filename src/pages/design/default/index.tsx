import React, { useMemo } from 'react';

import { Form } from '../../../components/Form';
import { DynamicMessage } from './DynamicMessage';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from './DefaultPromo';
import { useDate } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

type Props = {
  courses: string[];
  currencyCode: string;
}

const Default: React.FC<Props> = ({ courses, currencyCode }) => {
  const serverDate = useDate();

  const additionalOptions = useMemo(() => {
    const date = dateOverride() ?? serverDate;
    if (date >= new Date('2021-02-27T08:00:00-05:00') && date < new Date('2021-03-02T08:00:00-05:00')) {
      return { portfolio: true };
    } else {
      return {};
    }
  }, [ serverDate ]);

  return (
    <>
      <DefaultPromo currencyCode={currencyCode} />
      <Form
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={() => <Guarantee />}
        shippingOption={true}
        agreementLink="https://www.qcdesignschool.com/enrollment-agreement.html"
        agreementLinkGB="https://www.qcdesignschool.com/enrollment-agreement-gb.html"
        successLink="https://www.qcdesignschool.com/welcome-to-the-school/"
        dynamicCourseMessages={[ () => <DynamicMessage courses={courses} /> ]}
        additionalOptions={additionalOptions}
      />
    </>
  );
};

export default Default;
