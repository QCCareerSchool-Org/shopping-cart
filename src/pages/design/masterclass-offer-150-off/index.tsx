/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';

import { BuyOneGetOne } from '../../../components/BuyOneGetOne';
import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DynamicMessage } from './DynamicMessage';
import { MasterClass150OffPromo } from './Promo';

const filteredCourseGroups = [
  ...courseGroups.map(g => ({
    ...g,
    items: g.items.filter(c => [ 'I2', 'MS', 'PO', 'DB' ].includes(c.code)),
  })),
];

const MasterClass150Off = (): ReactElement => (
  <>
    <MasterClass150OffPromo />
    <Form
      courseGroups={filteredCourseGroups}
      school="QC Design School"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcdesignschool.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcdesignschool.com/enrollment-agreement-gb.html"
      successLink="https://www.qcdesignschool.com/welcome-to-the-school/"
      dynamicCourseMessages={[ DynamicMessage ]}
      promoCodeDefault="MASTERCLASS150"
      showMS={true}
    />
  </>
);

export default MasterClass150Off;
