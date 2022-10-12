import React, { FC } from 'react';

import { Form } from '../../../../../../components/Form';
import { BOGODynamicMessage } from '../../../../BOGODynamicMessage';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../Guarantee';
import { PetPromo20221013 } from './Promo';

export const Pet20221013: FC = () => (
  <>
    <PetPromo20221013 />
    <Form
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcpetstudies.com/enrollment-agreement"
      agreementLinkGB="https://www.qcpetstudies.com/enrollment-agreement-gb"
      successLink="https://www.qcpetstudies.com/welcome-to-the-school"
      dynamicCourseMessages={[ () => <BOGODynamicMessage /> ]}
      promoCodeDefault="PET200OFF"
    />
  </>
);
