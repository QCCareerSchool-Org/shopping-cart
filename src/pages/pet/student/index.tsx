import React from 'react';
import { Link } from 'react-router-dom';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';

const Default: React.FC = () => (
  <>
    <section>
      <div className="container text-center">
        <h1>Enrollment Form for Current and Past Students</h1>
        <p className="lead">If you&apos;re a current or past student of QC, use this form to enroll in courses at 50% off.</p>
        <p>Enrollment history will be verified. If you are not a current or past student of QC, please use the <Link to="/">standard enrollment form</Link>.</p>
      </div>
    </section>
    <Form
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={() => <Guarantee />}
      shippingOption={true}
      noShippingTitle="Use Your Own Tools"
      agreementLink="https://www.doggroomingcourse.com/enrollment-agreement.html"
      agreementLinkGB="https://www.doggroomingcourse.com/enrollment-agreement-gb.html"
      successLink="https://www.doggroomingcourse.com/welcome-to-the-school/"
      student={true}
    />
  </>
);

export default Default;
