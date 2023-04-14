import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, MouseEventHandler, useMemo } from 'react';

import { useDispatchContext } from '../../../hooks/useDispatchContext';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';
import { formatCurrency } from '../../../lib/formatCurrency';
import { PlanResult } from '../PlanResult';
import styles from './index.module.css';
import { courseKits } from './kits';

export const VisualPaymentPlans: FC = () => {
  const screenWidth = useScreenWidthContext();
  const { price, payment, courses } = useStateContext();
  const dispatch = useDispatchContext();

  const desktop = screenWidth >= 768;

  const handleFullClick: MouseEventHandler = () => {
    dispatch({ type: 'SET_PAYMENT_PLAN', payload: 'full' });
  };

  const handlePartClick: MouseEventHandler = () => {
    dispatch({ type: 'SET_PAYMENT_PLAN', payload: 'part' });
  };

  const courseKit = useMemo(() => {
    for (const c of courseKits) {
      if (courses.selected.includes(c.courseCode)) {
        if (c.full || c.part) {
          return c;
        }
      }
    }
    return false;
  }, [ courses.selected ]);

  return desktop
    ? (
      <div className="row justify-content-center">
        <div className="col-7 col-lg-4 col-xl-5 mb-4 mb-lg-0">
          <div onClick={handleFullClick} style={{ cursor: 'pointer' }} className={`${styles.box} ${styles.fullBox} ${styles.rounded} ${payment.plan === 'full' ? styles.selected : ''}`}>
            <div className={styles.sidePadding}>
              <h5>Pay in Full</h5>
              <ul className="p-0" style={{ listStyle: 'none' }}>
                {price && price.plans.full.discount > 0 && <li><strong>Save {price.currency.symbol}{formatCurrency(price.plans.full.discount)}</strong></li>}
                <li>Personalized support</li>
                <li>Lifetime course access</li>
                <li>Vibrant student community</li>
              </ul>
            </div>
            {courseKit
              ? (
                <div style={{ height: courseKit.height, position: 'relative' }}>
                  {courseKit.full && <img src={courseKit.full} style={{ width: '100%' }} alt="kit" />}
                  <div className="d-flex justify-content-center" style={{ position: 'absolute', left: 0, right: 0, top: courseKit.buttonOffset, width: '100%' }}>
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
        <div className="col-5 col-lg-4 col-xl-3 mb-4 mb-lg-0">
          <div onClick={handlePartClick} style={{ cursor: 'pointer' }} className={`${styles.box} ${styles.partBox} ${styles.rounded} ${payment.plan !== 'full' ? styles.selected : ''}`}>
            <div className={styles.sidePadding}>
              <h5>Pay by Installments</h5>
              <ul className="p-0" style={{ listStyle: 'none' }}>
                {price && price.plans.full.discount > 0 && <li><strong>Start for {price.currency.symbol}{formatCurrency(price.plans.part.deposit)}</strong></li>}
                <li>Personalized support</li>
                <li>Lifetime course access</li>
                <li>Vibrant student community</li>
              </ul>
            </div>
            {courseKit
              ? (
                <div style={{ height: courseKit.height, position: 'relative' }}>
                  {courseKit.part && <img src={courseKit.part} style={{ width: '100%' }} alt="kit" />}
                  <div className="d-flex justify-content-center" style={{ position: 'absolute', left: 0, right: 0, top: courseKit.buttonOffset, width: '100%' }}>
                    <button onClick={handleFullClick} className={`btn btn-black ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: payment.plan === 'full' ? 'none' : 'auto' }}>
                      {payment.plan !== 'full' ? <><FontAwesomeIcon icon={faCheckCircle} />&nbsp;Selected</> : 'Select Plan'}
                    </button>
                  </div>
                </div>
              )
              : (
                <div className="d-flex justify-content-center">
                  <button onClick={handleFullClick} className={`btn btn-black ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: payment.plan === 'full' ? 'none' : 'auto' }}>
                    {payment.plan !== 'full' ? <><FontAwesomeIcon icon={faCheckCircle} />&nbsp;Selected</> : 'Select Plan'}
                  </button>
                </div>
              )
            }
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <PlanResult shippingOptionReversed={false} />
        </div>
      </div>
    )
    : (
      <>mobile</>
    );
};
