import React from 'react';

import { Form } from '../../../components/Form';
import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';

const additionalOptions = {
  studentDiscount: true,
};

const Student: React.FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;

  return (
    <Form
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={() => <Guarantee />}
      shippingOption={true}
      agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
      successLink="https://www.qceventplanning.com/welcome-to-the-school/"
      student={true}
      showPromoCodeInput={date.getTime() >= Date.UTC(2021, 5, 9, 13)}
      additionalOptions={additionalOptions}
    />
  );
};

export default Student;
