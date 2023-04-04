import React, { memo, ReactElement } from 'react';

import { BuyOneGetOne } from '../../../components/BuyOneGetOne';
import { Form } from '../../../components/Form';
import { BogoDynamicMessage } from '../BogoDynamicMessage';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { Bogo4Promo } from './Bogo4Promo';

const Bogo4 = memo((): ReactElement => (
  <>
    <Bogo4Promo />
    <Form
      courseGroups={courseGroups}
      school="QC Design School"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcdesignschool.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcdesignschool.com/enrollment-agreement-gb.html"
      successLink="https://www.qcdesignschool.com/welcome-to-the-school/"
      dynamicCourseMessages={[ () => <BogoDynamicMessage /> ]}
      promoCodeDefault="BOGO"
    />
  </>
));

Bogo4.displayName = 'Bogo4';

export default Bogo4;
