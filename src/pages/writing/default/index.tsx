import React from 'react';

import { BuyOneGetOne } from '../../../components/BuyOneGetOne';
import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from './DefaultPromo';

const Default: React.FC = () => (
  <>
    <DefaultPromo />
    <Form
      courseGroups={courseGroups}
      school="Winghill Writing School"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.winghill.com/enrollment-agreement.html"
      agreementLinkGB="https://www.winghill.com/enrollment-agreement-gb.html"
      successLink="https://www.winghill.com/welcome-to-the-school/"
      coursesSubtitle={() => <BuyOneGetOne />}
    />
  </>
);

export default Default;
