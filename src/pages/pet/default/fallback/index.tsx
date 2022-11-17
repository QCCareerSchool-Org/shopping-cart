/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { BuyOneGetOne } from '../../../../components/BuyOneGetOne';
import { Form } from '../../../../components/Form';
import { BOGODynamicMessage } from '../../BOGODynamicMessage';
import { courseGroups } from '../../courseGroups';
import { Guarantee } from '../../Guarantee';
import { PetFallbackPromo } from './Promo';

export const PetFallback: React.FC = () => (
  <>
    <PetFallbackPromo />
    <Form
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qcpetstudies.com/enrollment-agreement"
      agreementLinkGB="https://www.qcpetstudies.com/enrollment-agreement-gb"
      successLink="https://www.qcpetstudies.com/welcome-to-the-school"
      dynamicCourseMessages={[ () => <BOGODynamicMessage /> ]}
    />
  </>
);
