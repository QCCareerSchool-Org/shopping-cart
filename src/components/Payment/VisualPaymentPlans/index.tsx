import React, { FC } from 'react';

import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { School } from '../../../lib/enrollment';
import { VisualPaymentPlansDesktop } from './desktop';
import { VisualPaymentPlansMobile } from './mobile';

type Props = {
  school: School;
  date: Date;
};

export const VisualPaymentPlans: FC<Props> = ({ school, date }) => {
  const screenWidth = useScreenWidthContext();

  const md = screenWidth >= 768;

  return md ? <VisualPaymentPlansDesktop school={school} date={date} /> : <VisualPaymentPlansMobile school={school} date={date} />;
};
