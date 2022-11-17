import React, { FC } from 'react';

import { BuyOneGetOne } from '../../../../../../components/BuyOneGetOne';
import { Form } from '../../../../../../components/Form';
import { BogoDynamicMessage } from '../../../../BogoDynamicMessage';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../Guarantee';
import { DesignPromo20221123 } from './Promo';

export const Design20221123: FC = () => (
  <>
    <DesignPromo20221123 />
    <Form
      courseGroups={courseGroups}
      school="QC Design School"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qcdesignschool.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcdesignschool.com/enrollment-agreement-gb.html"
      successLink="https://www.qcdesignschool.com/welcome-to-the-school/"
      promoCodeDefault="BOGO100"
      dynamicCourseMessages={[ () => <BogoDynamicMessage /> ]}
    />
  </>
);
