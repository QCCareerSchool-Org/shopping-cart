import React, { FC } from 'react';

import { BuyOneGetOne } from '../../../../components/BuyOneGetOne';
import { Form } from '../../../../components/Form';
import { courseGroups } from '../../courseGroups';
import { Guarantee } from '../../Guarantee';
import { WellnessFallbackPromo } from './Promo';

export const WellnessFallback: FC = () => (
  <>
    <WellnessFallbackPromo />
    <Form
      courseGroups={courseGroups}
      school="QC Wellness Studies"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qcwellnessstudies.com/enrollment-agreement"
      agreementLinkGB="https://www.qcwellnessstudies.com/enrollment-agreement-gb"
      successLink="https://www.qcwellnessstudies.com/welcome-to-the-school/"
    />
  </>
);
