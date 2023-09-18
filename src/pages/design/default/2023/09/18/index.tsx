import React, { FC } from 'react';

import { Form } from '../../../../../../components/Form';
import { BogoDynamicMessage } from '../../../../BogoDynamicMessage';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../Guarantee';
import { DesignPromo20230918 } from './Promo';

export const Design20230918: FC = () => (
  <>
    <DesignPromo20230918 />
    <Form
      courseGroups={courseGroups}
      school="QC Design School"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcdesignschool.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcdesignschool.com/enrollment-agreement-gb.html"
      successLink="https://www.qcdesignschool.com/welcome-to-the-school/"
      promoCodeDefault="BOGO"
      dynamicCourseMessages={[ () => <BogoDynamicMessage /> ]}
      dynamicCourseDescriptions="SHOW"
    />
  </>
);