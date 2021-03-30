import React from 'react';

import { Form } from '../../../components/Form';
import { DynamicMessage } from './DynamicMessage';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from './DefaultPromo';
import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

type Props = {
  courses: string[];
  currencyCode: string;
}

const additionalOptionsNone = {};
const additionalOptionsPortfolio = { portfolio: true };

const Default: React.FC<Props> = ({ courses, currencyCode }) => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;

  return (
    <>
      <DefaultPromo date={date} currencyCode={currencyCode} />
      <Form
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={() => <Guarantee />}
        shippingOption={true}
        agreementLink="https://www.qcdesignschool.com/enrollment-agreement.html"
        agreementLinkGB="https://www.qcdesignschool.com/enrollment-agreement-gb.html"
        successLink="https://www.qcdesignschool.com/welcome-to-the-school/"
        dynamicCourseMessages={[ () => <DynamicMessage date={date} courses={courses} /> ]}
        additionalOptions={date.getTime() >= Date.UTC(2021, 2, 27, 12) ? additionalOptionsNone : additionalOptionsPortfolio}
      />
    </>
  );
};

export default Default;
