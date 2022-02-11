/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { MasterClass200OffPromo } from './Promo';

const MasterClass200Off = (): ReactElement => (
  <>
    <MasterClass200OffPromo />
    <Form
      courseGroups={courseGroups}
      school="QC Design School"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcdesignschool.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcdesignschool.com/enrollment-agreement-gb.html"
      successLink="https://www.qcdesignschool.com/welcome-to-the-school/"
      promoCodeDefault="MASTERCLASS"
    />
  </>
);

export default MasterClass200Off;
