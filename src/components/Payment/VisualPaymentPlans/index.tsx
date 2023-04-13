import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, MouseEventHandler } from 'react';

import { useDispatchContext } from '../../../hooks/useDispatchContext';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';
import { formatCurrency } from '../../../lib/formatCurrency';
import { PlanResult } from '../PlanResult';

import styles from './index.module.css';

export const VisualPaymentPlans: FC = () => {
  const screenWidth = useScreenWidthContext();
  const { price, payment } = useStateContext();
  const dispatch = useDispatchContext();

  const desktop = screenWidth >= 768;

  const handleFullClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({ type: 'SET_PAYMENT_PLAN', payload: 'full' });
  };

  const handlePartClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({ type: 'SET_PAYMENT_PLAN', payload: 'part' });
  };

  return desktop
    ? (
      <div className="row justify-content-center">
        <div className="col-6 col-lg-4 col-xl-5 mb-4 mb-lg-0">
          <div className={`${styles.box} ${styles.fullBox} ${styles.rounded} ${payment.plan === 'full' ? styles.selected : ''}`}>
            <h4>Pay in Full</h4>
            <ul className="p-0" style={{ listStyle: 'none' }}>
              {price && price.plans.full.discount > 0 && <li><strong>Save {price.currency.symbol}{formatCurrency(price.plans.full.discount)}</strong></li>}
              <li>Personalized support</li>
              <li>Lifetime course access</li>
              <li>Vibrant student community</li>
            </ul>
            <div className="d-flex justify-content-center">
              <button onClick={handleFullClick} className={`btn btn-primary ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: payment.plan === 'full' ? 'none' : 'auto' }}>
                {payment.plan === 'full' ? <><FontAwesomeIcon icon={faCheckCircle} />&nbsp;&nbsp;Selected</> : 'Select Plan'}
              </button>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-4 col-xl-3 mb-4 mb-lg-0">
          <div className={`${styles.box} ${styles.partBox} ${styles.rounded} ${payment.plan === 'full' ? '' : styles.selected}`}>
            <h4>Pay in Installments</h4>
            <ul className="p-0" style={{ listStyle: 'none' }}>
              {price && price.plans.full.discount > 0 && <li><strong>Start for {price.currency.symbol}{formatCurrency(price.plans.part.deposit)}</strong></li>}
              <li>Personalized support</li>
              <li>Lifetime course access</li>
              <li>Vibrant student community</li>
            </ul>
            <div className="d-flex justify-content-center">
              <button onClick={handlePartClick} className={`btn btn-black ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: payment.plan !== 'full' ? 'none' : 'auto' }}>
                {payment.plan === 'full' ? 'Select Plan' : <><FontAwesomeIcon icon={faCheckCircle} />&nbsp;&nbsp;Selected</>}
              </button>
            </div>
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
