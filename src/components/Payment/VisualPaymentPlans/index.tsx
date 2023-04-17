import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from '@qccareerschool/hooks';
import React, { FC, MouseEventHandler, useMemo } from 'react';

import { useDispatchContext } from '../../../hooks/useDispatchContext';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';
import { formatCurrency } from '../../../lib/formatCurrency';
import { getSite } from '../../../lib/getSite';
import { PlanResult } from '../PlanResult';
import { VisualPaymentPlansDesktop } from './desktop';
import styles from './index.module.css';
import { courseKits } from './kits';
import { VisualPaymentPlansMobile } from './mobile';

export const VisualPaymentPlans: FC = () => {
  const screenWidth = useScreenWidthContext();
  const { hostname } = useLocation();
  const site = getSite(hostname);

  const md = screenWidth >= 768;

  return md ? <VisualPaymentPlansDesktop site={site} /> : <VisualPaymentPlansMobile site={site} />;
};
