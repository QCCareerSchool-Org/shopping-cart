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
    <DefaultPromo />
    <Form
      courseGroups={courseGroups}
      school="Winghill Writing School"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.winghill.com/enrollment-agreement.html"
      agreementLinkGB="https://www.winghill.com/enrollment-agreement-gb.html"
      successLink="https://www.winghill.com/welcome-to-the-school/"
      coursesSubtitle={() => <div style={{ textAlign: 'center', marginBottom: 24 }}><img className="img-fluid" src={require('../../../50-off.svg')} /></div>}
    />
  </>
);

export default Default;
