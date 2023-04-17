import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, MouseEventHandler, useMemo } from 'react';

import { useDispatchContext } from '../../../hooks/useDispatchContext';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';
import { formatCurrency } from '../../../lib/formatCurrency';
import { Site } from '../../../lib/getSite';
import { PlanResult } from '../PlanResult';
import styles from './index.module.css';
import { CourseKit, courseKits } from './kits';

type Props = {
  site: Site | null;
};

export const VisualPaymentPlansMobile: FC<Props> = ({ site }) => {
  const screenWidth = useScreenWidthContext();
  const { price, payment, courses } = useStateContext();
  const dispatch = useDispatchContext();

  const sm = screenWidth >= 576;
  const md = screenWidth >= 768;

  const handleFullClick: MouseEventHandler = e => {
    e.preventDefault();
    dispatch({ type: 'SET_PAYMENT_PLAN', payload: 'full' });
  };

  const handlePartClick: MouseEventHandler = e => {
    e.preventDefault();
    dispatch({ type: 'SET_PAYMENT_PLAN', payload: 'part' });
  };

  const courseKit = useMemo(() => {
    for (const c of courseKits) {
      if (courses.selected.includes(c.courseCode)) {
        return c;
      }
    }
    return false;
  }, [ courses.selected ]);

  if (md) {
    return null;
  }

  const cornerStyle = styles[`${site}Corner`];

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-sm-9 mb-4">

        <ul className={`nav ${styles.navTabs}`}>
          <li className={styles.navItem}>
            <a className={`${styles.navLink} ${styles.fullNavLink} ${styles.roundedTop} ${payment.plan === 'full' ? styles.active : ''}`} style={{ backgroundColor: courseKit !== false ? courseKit.images?.full.backgroundColor : undefined, color: courseKit !== false ? courseKit.images?.full.color : undefined, borderColor: courseKit !== false ? courseKit.images?.full.borderColor : undefined }} href="#" onClick={handleFullClick}>
              {payment.plan === 'full' ? <FontAwesomeIcon icon={faCheckCircle} className="text-primary" /> : <span style={{ marginRight: 16 }} />}<span style={{ marginLeft: 8, marginRight: 20 }}>Pay in Full</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={`${styles.navLink} ${styles.partNavLink} ${styles.roundedTop} ${payment.plan !== 'full' ? styles.active : ''}`} style={{ backgroundColor: courseKit !== false ? courseKit.images?.part.backgroundColor : undefined, color: courseKit !== false ? courseKit.images?.part.color : undefined, borderColor: courseKit !== false ? courseKit.images?.part.borderColor : undefined }} href="#" onClick={handlePartClick}>
              {payment.plan !== 'full' ? <FontAwesomeIcon icon={faCheckCircle} className="text-primary" /> : <span style={{ marginRight: 16 }} />}<span style={{ marginLeft: 8, marginRight: 20 }}>{screenWidth > 382 ? 'Installment Plan' : 'Installments'}</span>
            </a>
          </li>
        </ul>
        {payment.plan === 'full'
          ? (
            <div className={`${styles.box} ${styles.fullBox} ${cornerStyle} ${styles.roundedBottom}`} style={{ cursor: 'pointer', backgroundColor: courseKit !== false ? courseKit.images?.full.backgroundColor : undefined, color: courseKit !== false ? courseKit.images?.full.color : undefined, borderColor: courseKit !== false ? courseKit.images?.full.borderColor : undefined }}>
              <div className={styles.sidePadding}>
                <h3>Pay in Full</h3>
                <ul className={`${styles.planList} mb-0`}>
                  {courseKit !== false && courseKit.fullBullets.map((b, i) => <li key={i}>{b}</li>)}
                  {price && price.plans.full.discount > 0 && <li><strong>Save {price.currency.symbol}{formatCurrency(price.plans.full.discount)}</strong></li>}
                  <li>Personalized support</li>
                  <li>Lifetime course access</li>
                  <li>Vibrant student community</li>
                </ul>
              </div>
              {courseKit !== false && courseKit.images && (
                <div className="mt-3">
                  <img src={courseKit.images.full.lg} style={{ width: '100%' }} alt="kit" />
                </div>
              )}
            </div>
          )
          : (
            <div className={`${styles.box} ${styles.partBox} ${styles.roundedBottom}`} style={{ cursor: 'pointer', backgroundColor: courseKit !== false ? courseKit.images?.part.backgroundColor : undefined, color: courseKit !== false ? courseKit.images?.part.color : undefined, borderColor: courseKit !== false ? courseKit.images?.part.borderColor : undefined }}>
              <div className={styles.sidePadding}>
                <h3>Installment Plan</h3>
                <ul className={`${styles.planList} mb-0`}>
                  {courseKit !== false && courseKit.partBullets.map((b, i) => <li key={i}>{b}</li>)}
                  {price && price.plans.full.discount > 0 && <li><strong>Start for {price.currency.symbol}{formatCurrency(price.plans.part.deposit)}</strong></li>}
                  <li>Personalized support</li>
                  <li>Lifetime course access</li>
                  <li>Vibrant student community</li>
                </ul>
              </div>
              {courseKit !== false && courseKit.images && (
                <div className="mt-3">
                  <img src={courseKit.images.part.lg} style={{ width: '100%' }} alt="kit" />
                </div>
              )}
            </div>
          )
        }
      </div>
      <div className="col-12 col-sm-10">
        <PlanResult shippingOptionReversed={false} />
      </div>
    </div>
  );
};