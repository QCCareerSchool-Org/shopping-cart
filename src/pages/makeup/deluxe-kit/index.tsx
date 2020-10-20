import React from 'react';

import { useStateContext } from '../../../hooks/useStateContext';

import { Form } from '../../../components/Form';
import { Guarantee } from '../Guarantee';
import { courseGroups } from '../courseGroups';
import { DeluxeKitPromo } from './DeluxeKitPromo';

export const DeluxeKit: React.FC = () => {
  const { address, price } = useStateContext();

  return <>
    <DeluxeKitPromo countryCode={address.countryCode} currencyCode={price?.currency.code ?? 'USD'} />
    <Form
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
      additionalOptions={{ deluxeKit: true }}
    />
  </>;
};
