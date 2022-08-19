/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';

import { Form } from '../../../components/Form';
import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from './DefaultPromo';
import { DynamicMessage } from './DynamicMessage';

const Default = (): ReactElement => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;

  return (
    <>
      <DefaultPromo date={date} />
      <Form
        courseGroups={courseGroups}
        school="QC Event School"
        guarantee={() => <Guarantee />}
        agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
        agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
        successLink="https://www.qceventplanning.com/welcome-to-the-school/"
        dynamicCourseMessages={[ () => <DynamicMessage date={date} /> ]}
        promoCodeDefault={date.getTime() >= Date.UTC(2022, 7, 24, 13, 30) && date.getTime() < Date.UTC(2022, 8, 12, 13, 30) ? '2SPECIALTY' : 'SPECIALTY'}
      />
    </>
  );
};

export default Default;
