import React, { ReactElement } from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { Promo } from './promo';

const additionalOptions = {
  discount: {
    default: 200,
  },
  discountSignature: 'Ylf/UJhKP1vd9vTfxx0mEMtQ5nNlPq2vF0AFRSyiZfq9Lphrx2t5mepA26R+dXzgLos+1E7wG0LH0ygEeDiL+BUWhxx18zHcZc2CXgmyQvsDycWh9jrTRqYasb7EtkxZDyiPLwzd4bsYC7fmm3+edzSNL6abUQAH4MHjhvF14jy0NTfxyCXuLR3RsZBMSHkZH5SvyaQSlp5pf3jeXIA56PWgdpP1Tvi+GaMMnI0N4Gx5NI7GlKdjljDt8JmGjZ6alWPPupjCzyPvM7dgBnKeTN7R86KBFbdNiRckSu8XND3b6Rtwj3NaoWx4+O+Q+cgIL1IZfEJITZyzfcmv4satfQ==',
};

const Grooming200Off = (): ReactElement => (
  <>
    <Promo />
    <Form
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.doggroomingcourse.com/enrollment-agreement.html"
      agreementLinkGB="https://www.doggroomingcourse.com/enrollment-agreement-gb.html"
      successLink="https://www.doggroomingcourse.com/welcome-to-the-school/"
      additionalOptions={additionalOptions}
    />
  </>
);

export default Grooming200Off;
