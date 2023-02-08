import React, { FC } from 'react';

import { Form } from '../../../../../../components/Form';
import { BOGODynamicMessage } from '../../../../BOGODynamicMessage';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../Guarantee';
import { PetCoursesSubtitle } from '../../../../PetCoursesSubtitle';
import { PetPromo20230208 } from './Promo';

export const Pet20230208: FC = () => (
  <>
    <PetPromo20230208 />
    <Form
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <PetCoursesSubtitle />}
      agreementLink="https://www.qcpetstudies.com/enrollment-agreement"
      agreementLinkGB="https://www.qcpetstudies.com/enrollment-agreement-gb"
      successLink="https://www.qcpetstudies.com/welcome-to-the-school"
      dynamicCourseMessages={[ () => <BOGODynamicMessage /> ]}
      dynamicCourseDescriptions="SHOW"
      promoCodeDefault="PET100OFF"
    />
  </>
);
