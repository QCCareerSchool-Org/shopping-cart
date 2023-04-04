import React, { memo, ReactElement } from 'react';

import { BuyOneGetOne } from '../../../components/BuyOneGetOne';
import { Form } from '../../../components/Form';
import { BogoDynamicMessage } from '../BogoDynamicMessage';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { Bogo1Promo } from './Bogo1Promo';

const Bogo1 = memo((): ReactElement => (
  <>
    <Bogo1Promo />
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

Bogo1.displayName = 'Bogo1';

export default Bogo1;
