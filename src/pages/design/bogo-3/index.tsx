import React, { memo, ReactElement } from 'react';

import { Form } from '../../../components/Form';
import { BogoDynamicMessage } from '../BogoDynamicMessage';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { Bogo3Promo } from './Bogo3Promo';

const Bogo3 = memo((): ReactElement => {
  return (
    <>
      <Bogo3Promo />
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

Bogo3.displayName = 'Bogo3';

export default Bogo3;
