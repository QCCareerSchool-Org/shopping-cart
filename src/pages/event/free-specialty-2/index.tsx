import React, { memo, ReactElement } from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { FreeSpecialtyDynamicMessage } from '../FreeSpecialtyDynamicMessage';
import { Guarantee } from '../Guarantee';
import { FreeSpecialty2Promo } from './FreeSpecialty2Promo';

const FreeSpecialty2 = memo((): ReactElement => (
  <>
    <FreeSpecialty2Promo />
    <Form
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
      successLink="https://www.qceventplanning.com/welcome-to-the-school/"
      dynamicCourseMessages={[ () => <FreeSpecialtyDynamicMessage /> ]}
      promoCodeDefault="SPECIALTY"
    />
  </>
));

FreeSpecialty2.displayName = 'FreeSpecialty2';

export default FreeSpecialty2;
