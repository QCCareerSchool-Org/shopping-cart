import React, { memo, ReactElement } from 'react';

import { BuyOneGetOne } from '../../../components/BuyOneGetOne';
import { Form } from '../../../components/Form';
import { BogoDynamicMessage } from '../BogoDynamicMessage';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { Bogo2Promo } from './Bogo2Promo';

const Bogo2 = memo((): ReactElement => (
  <>
    <Bogo2Promo />
    <Form
      courseGroups={courseGroups}
      school="QC Design School"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qcdesignschool.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcdesignschool.com/enrollment-agreement-gb.html"
      successLink="https://www.qcdesignschool.com/welcome-to-the-school/"
      dynamicCourseMessages={[ () => <BogoDynamicMessage /> ]}
      promoCodeDefault="BOGO"
    />
  </>
));

Bogo2.displayName = 'Bogo2';

export default Bogo2;
