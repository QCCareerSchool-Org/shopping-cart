import React, { FC, useMemo } from 'react';

import { Form } from '../../../components/Form';
import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { ContinuedEducationPromo } from './Promo';

const startDate = new Date(Date.UTC(2023, 10, 16, 14, 30)); // November 16 at 09:30 (15:30 UTC)
const endDate = new Date(Date.UTC(2023, 11, 1, 5)); // December 1 at 00:00 (05:00 UTC)

export const MakeupContinuedEducation: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;

  const promoCodeDefault = useMemo(() => (date >= startDate && date < endDate ? 'SAVE60' : undefined), [ date ]);

  return (
    <>
      <ContinuedEducationPromo date={date} />
      <Form
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={() => <Guarantee />}
        agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
        agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
        student
        promoCodeDefault={promoCodeDefault}
      />
    </>
  );
};
