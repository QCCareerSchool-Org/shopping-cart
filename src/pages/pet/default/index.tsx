/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Form } from '../../../components/Form';
import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';
import { BOGODynamicMessage } from '../BOGODynamicMessage';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from './DefaultPromo';

type Props = {
  currencyCode: string;
};

const Default: React.FC<Props> = ({ currencyCode }) => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;

  return (
    <>
      <DefaultPromo date={date} />
      <Form
        courseGroups={courseGroups}
        school="QC Pet Studies"
        guarantee={() => <Guarantee />}
        agreementLink="https://www.qcpetstudies.com/enrollment-agreement"
        agreementLinkGB="https://www.qcpetstudies.com/enrollment-agreement-gb"
        successLink="https://www.qcpetstudies.com/welcome-to-the-school"
        dynamicCourseMessages={[ () => <BOGODynamicMessage /> ]}
        promoCodeDefault={date.getTime() >= Date.UTC(2022, 7, 24, 13, 3) && date.getTime() < Date.UTC(2022, 8, 12, 13, 30) ? 'PET100OFF' : undefined}
      />
    </>
  );
};

export default Default;
