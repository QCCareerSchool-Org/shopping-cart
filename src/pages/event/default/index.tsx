import React from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { DynamicMessage } from './DynamicMessage';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from './DefaultPromo';

type Props = {
  courses: string[];
}

const Default: React.FC<Props> = ({ courses }) => {
  return (
    <>
      <DefaultPromo />
      <Form
        courseGroups={courseGroups}
        school="QC Event School"
        guarantee={() => <Guarantee />}
        allowNoShipping={true}
        agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
        agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
        successLink="https://www.qceventplanning.com/welcome-to-the-school/"
        dynamicCourseMessages={[ () => <DynamicMessage courses={courses} /> ]}
      />
    </>
  );
};

export default Default;
