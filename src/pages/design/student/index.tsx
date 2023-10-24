import React from 'react';

import { Form } from '../../../components/Form';
import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { Promo } from './Promo';

const Student: React.FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  return (
    <>
      <Promo date={date} />
      <Form
        courseGroups={courseGroups}
        school="QC Design School"
        guarantee={() => <Guarantee />}
        agreementLink="https://www.qcdesignschool.com/enrollment-agreement.html"
        agreementLinkGB="https://www.qcdesignschool.com/enrollment-agreement-gb.html"
        successLink="https://www.qcdesignschool.com/welcome-to-the-school/"
        student={true}
      />
    </>
  );
};

export default Student;
