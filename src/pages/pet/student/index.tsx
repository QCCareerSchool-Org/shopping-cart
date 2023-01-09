import React from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { FirstAidIncluded } from '../FirstAidIncluded';
import { Guarantee } from '../Guarantee';
import { Promo } from './Promo';

const Default: React.FC = () => (
  <>
    <Promo />
    <Form
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <div className="mb-4" style={{ marginTop: '-0.75rem' }}><FirstAidIncluded /></div>}
      agreementLink="https://www.qcpetstudies.com/enrollment-agreement"
      agreementLinkGB="https://www.qcpetstudies.com/enrollment-agreement-gb"
      successLink="https://www.qcpetstudies.com/welcome-to-the-school"
      student={true}
    />
  </>
);

export default Default;
