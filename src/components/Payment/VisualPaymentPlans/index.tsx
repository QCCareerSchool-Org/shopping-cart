import { useLocation } from '@qccareerschool/hooks';
import React, { FC } from 'react';

import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { School } from '../../../lib/enrollment';
import { getSite } from '../../../lib/getSite';
import { VisualPaymentPlansDesktop } from './desktop';
import { VisualPaymentPlansMobile } from './mobile';

type Props = {
  school: School;
};

export const VisualPaymentPlans: FC<Props> = ({ school }) => {
  const screenWidth = useScreenWidthContext();
  const { hostname } = useLocation();
  const site = getSite(hostname);

  const md = screenWidth >= 768;

  return md ? <VisualPaymentPlansDesktop school={school} /> : <VisualPaymentPlansMobile school={school} />;
};
