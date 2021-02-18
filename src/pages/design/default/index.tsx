import React from 'react';

import { Form } from '../../../components/Form';
import { DynamicMessage } from './DynamicMessage';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from './DefaultPromo';

type Props = {
  courses: string[];
}

const Default: React.FC<Props> = ({ courses }) => (
  <>
    <DefaultPromo />
    <Form
      courseGroups={courseGroups}
      school="QC Design School"
      guarantee={() => <Guarantee />}
      shippingOption={true}
      agreementLink="https://www.qcdesignschool.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcdesignschool.com/enrollment-agreement-gb.html"
      successLink="https://www.qcdesignschool.com/welcome-to-the-school/"
      dynamicCourseMessages={[ () => <DynamicMessage courses={courses} /> ]}
    />
  </>
);

export default Default;
