import React, { FC } from 'react';

import { BuyOneGetOne } from '../../../../components/BuyOneGetOne';
import { Form } from '../../../../components/Form';
import { courseGroups } from '../../courseGroups';
import { Guarantee } from '../../Guarantee';
import { DesignFallbackPromo } from './Promo';

export const DesignFallback: FC = () => (
  <>
    <DesignFallbackPromo />
    <Form
      courseGroups={courseGroups}
      school="QC Design School"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qcdesignschool.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcdesignschool.com/enrollment-agreement-gb.html"
      successLink="https://www.qcdesignschool.com/welcome-to-the-school/"
      dynamicCourseDescriptions="SHOW"
    />
  </>
);
