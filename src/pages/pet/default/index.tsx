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
      school="QC Pet Studies"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.doggroomingcourse.com/enrollment-agreement.html"
      agreementLinkGB="https://www.doggroomingcourse.com/enrollment-agreement-gb.html"
      successLink="https://www.doggroomingcourse.com/welcome-to-the-school/"
    />
  </>
);

export default Default;
