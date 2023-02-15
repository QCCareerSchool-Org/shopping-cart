/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';

import { BuyOneGetOne } from '../../../components/BuyOneGetOne';
import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { Floral200Promo } from './Promo';

export const Floral200 = (): ReactElement => (
  <>
    <Floral200Promo />
    <Form
      courseGroups={courseGroups}
      school="QC Event School"
      // courseOverride={courseOverride}
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
      successLink="https://www.qceventplanning.com/welcome-to-the-school/"
      promoCodeDefault="FOUNDATION200"
    />
  </>
);
