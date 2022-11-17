import React, { FC } from 'react';

import { BuyOneGetOne } from '../../../../../../components/BuyOneGetOne';
import { Form } from '../../../../../../components/Form';
import { BOGODynamicMessage } from '../../../../BOGODynamicMessage';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../Guarantee';
import { PetPromo20230118 } from './Promo';

export const Pet20230118: FC = () => (
  <>
    <PetPromo20230118 />
    <Form
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qcpetstudies.com/enrollment-agreement"
      agreementLinkGB="https://www.qcpetstudies.com/enrollment-agreement-gb"
      successLink="https://www.qcpetstudies.com/welcome-to-the-school"
      dynamicCourseMessages={[ () => <BOGODynamicMessage /> ]}
      promoCodeDefault="PET300OFF"
    />
  </>
);
