/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';

import { BuyOneGetOne } from '../../../components/BuyOneGetOne';
import { Form } from '../../../components/Form';
import { CourseGroup } from '../../../state/courses';
import { Guarantee } from '../Guarantee';
import { Floral200Promo } from './Promo';

const additionalOptions = {
  discount: {
    default: 200,
  },
  discountSignature: 'Ylf/UJhKP1vd9vTfxx0mEMtQ5nNlPq2vF0AFRSyiZfq9Lphrx2t5mepA26R+dXzgLos+1E7wG0LH0ygEeDiL+BUWhxx18zHcZc2CXgmyQvsDycWh9jrTRqYasb7EtkxZDyiPLwzd4bsYC7fmm3+edzSNL6abUQAH4MHjhvF14jy0NTfxyCXuLR3RsZBMSHkZH5SvyaQSlp5pf3jeXIA56PWgdpP1Tvi+GaMMnI0N4Gx5NI7GlKdjljDt8JmGjZ6alWPPupjCzyPvM7dgBnKeTN7R86KBFbdNiRckSu8XND3b6Rtwj3NaoWx4+O+Q+cgIL1IZfEJITZyzfcmv4satfQ==',
};

const courseGroups: CourseGroup[] = [
  {
    items: [ { code: 'FD', name: 'Floral Design' } ],
  },
];

const courseOverride = [ 'FD' ];

export const Floral200 = (): ReactElement => (
  <>
    <Floral200Promo />
    <Form
      courseGroups={courseGroups}
      school="QC Event School"
      courseOverride={courseOverride}
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
      successLink="https://www.qceventplanning.com/welcome-to-the-school/"
      additionalOptions={additionalOptions}
    />
  </>
);
