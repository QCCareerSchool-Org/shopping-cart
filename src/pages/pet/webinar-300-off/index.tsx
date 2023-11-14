import React, { ReactElement } from 'react';

import { Form } from '../../../components/Form';
import { BOGODynamicMessage } from '../BOGODynamicMessage';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { PetCoursesSubtitle } from '../PetCoursesSubtitle';
import { Promo } from './promo';

const Webinar300Off = (): ReactElement => (
  <>
    <Promo />
    <Form
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <PetCoursesSubtitle />}
      agreementLink="https://www.qcpetstudies.com/enrollment-agreement"
      agreementLinkGB="https://www.qcpetstudies.com/enrollment-agreement-gb"
      successLink="https://www.qcpetstudies.com/welcome-to-the-school"
      promoCodeDefault="PET300OFF"
      dynamicCourseMessages={[ () => <BOGODynamicMessage /> ]}
    />
  </>
);

export default Webinar300Off;
