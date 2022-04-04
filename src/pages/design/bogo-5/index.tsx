import React, { memo, ReactElement } from 'react';

import { Form } from '../../../components/Form';
import { BogoDynamicMessage } from '../BogoDynamicMessage';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { Bogo5Promo } from './Bogo5Promo';

const Bogo5 = memo((): ReactElement => {
  return (
    <>
      <Bogo5Promo />
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
  );
});

Bogo5.displayName = 'Bogo5';

export default Bogo5;
