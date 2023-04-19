import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, MouseEventHandler, useMemo } from 'react';

import { useDispatchContext } from '../../../hooks/useDispatchContext';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';
import { School } from '../../../lib/enrollment';
import { formatCurrency } from '../../../lib/formatCurrency';
import { Site } from '../../../lib/getSite';
import { PlanResult } from '../PlanResult';
import styles from './index.module.css';
import { courseKits } from './kits';

type Props = {
  school: School;
};

export const VisualPaymentPlansDesktop: FC<Props> = ({ school }) => {
  const screenWidth = useScreenWidthContext();
  const { price, payment, courses } = useStateContext();
  const dispatch = useDispatchContext();

  const md = screenWidth >= 768;
  const lg = screenWidth >= 992;
  const xl = screenWidth >= 1200;

  const handleFullClick: MouseEventHandler = () => {
    dispatch({ type: 'SET_PAYMENT_PLAN', payload: 'full' });
  };

  const handlePartClick: MouseEventHandler = () => {
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

  if (!md) {
    return null;
  }

  const cornerStyle = school === 'QC Makeup Academy'
    ? styles.makeupCorner
    : school === 'QC Design School'
      ? styles.designCorner
      : school === 'QC Event School'
        ? styles.eventCorner
        : school === 'QC Pet Studies'
          ? styles.petCorner
          : school === 'QC Wellness Studies'
            ? styles.wellnessCorner
            : undefined;

  return (
    <div className="row justify-content-center">
      <div className={`${styles.selectionColumn} col-12 col-lg-8`}>
        <div className="row mb-4 mb-lg-0">
          <div className={`${styles.fullColumn} col-7 col-lg-6`}>
            <div onClick={handleFullClick} className={`${styles.box} ${styles.fullBox} ${cornerStyle} ${styles.rounded} ${payment.plan === 'full' ? styles.selected : ''}`} style={{ cursor: 'pointer', backgroundColor: courseKit !== false ? courseKit.images?.full.backgroundColor : undefined, color: courseKit !== false ? courseKit.images?.full.color : undefined, borderColor: courseKit !== false ? courseKit.images?.full.borderColor : undefined }}>
              <div className={styles.sidePadding}>
                <h3>Pay in Full</h3>
                <ul className={styles.planList}>
                  {courseKit !== false && courseKit.fullBullets.map((b, i) => <li key={i}>{b}</li>)}
                  {price && price.plans.full.discount > 0 && <li><strong>Save {price.currency.symbol}{formatCurrency(price.plans.full.discount)}</strong></li>}
                  <li>Personalized support</li>
                  <li>Lifetime course access</li>
                  <li>Vibrant student community</li>
                </ul>
              </div>
              {courseKit !== false && courseKit.images
                ? (
                  <div style={{ height: (xl || !lg) ? courseKit.images.height.md : courseKit.images.height.lg, position: 'relative' }}>
                    <img src={(xl || !lg) ? courseKit.images.full.md : courseKit.images.full.lg} style={{ width: '100%' }} alt="kit" />
                    <div className="d-flex justify-content-center" style={{ position: 'absolute', left: 0, right: 0, top: (xl || !lg) ? courseKit.images.buttonOffset.md : courseKit.images.buttonOffset.lg, width: '100%' }}>
                      <button onClick={handleFullClick} className={`btn btn-primary ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: payment.plan === 'full' ? 'none' : 'auto' }}>
                        {payment.plan === 'full' ? <><FontAwesomeIcon icon={faCheckCircle} />&nbsp;Selected</> : 'Select Plan'}
                      </button>
                    </div>
                  </div>
                )
                : (
                  <div className="d-flex justify-content-center">
                    <button onClick={handleFullClick} className={`btn btn-primary ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: payment.plan === 'full' ? 'none' : 'auto' }}>
                      {payment.plan === 'full' ? <><FontAwesomeIcon icon={faCheckCircle} />&nbsp;Selected</> : 'Select Plan'}
                    </button>
                  </div>
                )
              }
            </div>
          </div>
          <div className={`${styles.partColumn} col-5 col-lg-6`}>
            <div onClick={handlePartClick} className={`${styles.box} ${styles.partBox} ${styles.rounded} ${payment.plan !== 'full' ? styles.selected : ''}`} style={{ cursor: 'pointer', backgroundColor: courseKit !== false ? courseKit.images?.part.backgroundColor : undefined, color: courseKit !== false ? courseKit.images?.part.color : undefined, borderColor: courseKit !== false ? courseKit.images?.part.borderColor : undefined }}>
              <div className={styles.sidePadding}>
                <h3>Installment Plan</h3>
                <ul className={styles.planList}>
                  {courseKit !== false && courseKit.partBullets.map((b, i) => <li key={i}>{b}</li>)}
                  {price && price.plans.full.discount > 0 && <li><strong>Start for {price.currency.symbol}{formatCurrency(price.plans.part.deposit)}</strong></li>}
                  <li>Personalized support</li>
                  <li>Lifetime course access</li>
                  <li>Vibrant student community</li>
                </ul>
              </div>
              {courseKit !== false && courseKit.images
                ? (
                  <div style={{ height: (xl || !lg) ? courseKit.images.height.md : courseKit.images.height.lg, position: 'relative' }}>
                    <img src={(xl || !lg) ? courseKit.images.part.md : courseKit.images.part.lg} style={{ width: '100%' }} alt="kit" />
                    <div className="d-flex justify-content-center" style={{ position: 'absolute', left: 0, right: 0, top: (xl || !lg) ? courseKit.images.buttonOffset.md : courseKit.images.buttonOffset.lg, width: '100%' }}>
                      <button onClick={handlePartClick} className={`btn btn-black ${styles.rounded} ${styles.partButton}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: payment.plan === 'full' ? 'none' : 'auto' }}>
                        {payment.plan !== 'full' ? <><FontAwesomeIcon icon={faCheckCircle} />&nbsp;Selected</> : 'Select Plan'}
                      </button>
                    </div>
                  </div>
                )
                : (
                  <div className="d-flex justify-content-center">
                    <button onClick={handlePartClick} className={`btn btn-black ${styles.rounded} ${styles.partButton}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: payment.plan === 'full' ? 'none' : 'auto' }}>
                      {payment.plan !== 'full' ? <><FontAwesomeIcon icon={faCheckCircle} />&nbsp;Selected</> : 'Select Plan'}
                    </button>
                  </div>
                )
              }
            </div>
          </div>
          {courseKit !== false && courseKit.details && (
            <div className="col-7 col-lg-12 col-xl-7 mt-2">
              {courseKit.details}
            </div>
          )}
        </div>
      </div>
      <div className={`${styles.resultColumn} col-12 col-md-6 col-lg-4`}>
        <PlanResult shippingOptionReversed={false} />
      </div>
    </div>
  );
};
