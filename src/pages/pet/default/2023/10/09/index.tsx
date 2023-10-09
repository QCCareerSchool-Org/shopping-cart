import React, { FC } from 'react';

import { Form } from '../../../../../../components/Form';
import { BOGODynamicMessage } from '../../../../BOGODynamicMessage';
import { courseGroups } from '../../../../courseGroups';
import { Guarantee } from '../../../../Guarantee';
import { PetCoursesSubtitle } from '../../../../PetCoursesSubtitle';
import { PetPromo20231009 } from './Promo';

export const Pet20231009: FC = () => (
  <>
    <PetPromo20231009 />
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
      promoCodeDefault="PET200OFF"
      billingAddress={true}
    />
  </>
);
