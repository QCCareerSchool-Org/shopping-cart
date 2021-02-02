import React from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from './DefaultPromo';

type Props = {
  countryCode: string;
  currencyCode: string;
  courses: string[];
}

const Default: React.FC<Props> = ({ countryCode, currencyCode, courses }) => (
  <>
    <DefaultPromo countryCode={countryCode} currencyCode={currencyCode} />
    <Form
      courseGroups={courseGroups}
      school="QC Wellness Studies"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcwellnessstudies.com/enrollment-agreement"
      agreementLinkGB="https://www.qcwellnessstudies.com/enrollment-agreement-gb"
      successLink="https://www.qcwellnessstudies.com/welcome-to-the-school/"
    />
  </>
);

export default Default;
