/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Form } from '../../../components/Form';
import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';
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
        agreementLink="https://www.doggroomingcourse.com/enrollment-agreement.html"
        agreementLinkGB="https://www.doggroomingcourse.com/enrollment-agreement-gb.html"
        successLink="https://www.doggroomingcourse.com/welcome-to-the-school/"
      />
    </>
  );
};

export default Default;
