import React, { memo, ReactElement } from 'react';

import { BuyOneGetOne } from '../../../components/BuyOneGetOne';
import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { TwoFreeSpecialtyDynamicMessage } from '../TwoFreeSpecialtyDynamicMessage';
import { TwoFreeSpecialtyPromo } from './TwoFreeSpecialtyPromo';

const TwoFreeSpecialty = memo((): ReactElement => (
  <>
    <TwoFreeSpecialtyPromo />
    <Form
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
      successLink="https://www.qceventplanning.com/welcome-to-the-school/"
      dynamicCourseMessages={[ () => <TwoFreeSpecialtyDynamicMessage /> ]}
      promoCodeDefault="2SPECIALTY"
    />
  </>
));

TwoFreeSpecialty.displayName = 'TwoFreeSpecialty';

export default TwoFreeSpecialty;
