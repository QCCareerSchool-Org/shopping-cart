import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, MouseEventHandler, useMemo } from 'react';

import { Card, CardBody } from 'reactstrap';
import { useDispatchContext } from '../../../hooks/useDispatchContext';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';
import { School } from '../../../lib/enrollment';
import { formatCurrency } from '../../../lib/formatCurrency';
import { CanadaTaxCredits } from '../CanadaTaxCredits';
import { PlanResult } from '../PlanResult';
import styles from './index.module.css';
import { getCourseKits, getSchoolKits } from './kits';

type Props = {
  school: School;
  date: Date;
};

export const VisualPaymentPlansMobile: FC<Props> = ({ school, date }) => {
  const screenWidth = useScreenWidthContext();
  const { price, payment, courses } = useStateContext();
  const dispatch = useDispatchContext();

  const md = screenWidth >= 768;

  const handleFullClick: MouseEventHandler = e => {
    e.preventDefault();
    dispatch({ type: 'SET_PAYMENT_PLAN', payload: 'full' });
  };

  const handlePartClick: MouseEventHandler = e => {
    e.preventDefault();
    dispatch({ type: 'SET_PAYMENT_PLAN', payload: 'part' });
  };

  const schoolKit = getSchoolKits(date)[school];

  const courseKit = useMemo(() => {
    for (const c of getCourseKits(date)) {
      if (Array.isArray(c.courseCode) && c.courseCode.some(f => courses.selected.includes(f))) {
        return c;
      }
      if (typeof c.courseCode === 'string' && courses.selected.includes(c.courseCode)) {
        return c;
      }
    }
    return false;
  }, [ courses.selected ]);

  if (md) {
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
      <div className="col-12 col-sm-9 mb-4" style={{ maxWidth: 405, margin: '0 auto' }}>

        <ul className={`nav ${styles.navTabs}`}>
          <li className={styles.navItem}>
            <a className={`${styles.navLink} ${styles.fullNavLink} ${payment.plan === 'full' ? styles.active : ''}`} style={{ backgroundColor: courseKit !== false ? courseKit.images?.full.backgroundColor : undefined, color: courseKit !== false ? courseKit.images?.full.color : undefined, borderColor: courseKit !== false ? courseKit.images?.full.borderColor : undefined }} href="#" onClick={handleFullClick}>
              {payment.plan === 'full' ? <FontAwesomeIcon icon={faCheckCircle} className="text-primary" /> : <FontAwesomeIcon icon={faCircle} className={styles.muted} />}<span style={{ marginLeft: 8 }}>Pay in Full</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={`${styles.navLink} ${styles.partNavLink} ${payment.plan !== 'full' ? styles.active : ''}`} style={{ backgroundColor: courseKit !== false ? courseKit.images?.part.backgroundColor : undefined, color: courseKit !== false ? courseKit.images?.part.color : undefined, borderColor: courseKit !== false ? courseKit.images?.part.borderColor : undefined }} href="#" onClick={handlePartClick}>
              {payment.plan !== 'full' ? <FontAwesomeIcon icon={faCheckCircle} className="text-primary" /> : <FontAwesomeIcon icon={faCircle} className={styles.muted} />}<span style={{ marginLeft: 8 }}>{screenWidth > 382 ? 'Installment Plan' : 'Installments'}</span>
            </a>
          </li>
        </ul>
        {payment.plan === 'full'
          ? (
            <div className={`${styles.box} ${styles.fullBox} ${cornerStyle} ${styles.roundedBottom}`} style={{ backgroundColor: courseKit !== false ? courseKit.images?.full.backgroundColor : undefined, color: courseKit !== false ? courseKit.images?.full.color : undefined, borderColor: courseKit !== false ? courseKit.images?.full.borderColor : undefined }}>
              <div className={styles.sidePadding}>
                <h3 className={styles.boxTitle}>Pay in Full</h3>
                <ul className={`${styles.planList} mb-0`}>
                  {courseKit !== false && courseKit.fullBullets.map((b, i) => <li key={i}>{b}</li>)}
                  {price && price.plans.full.discount > 0 && <li><strong>Save {price.currency.symbol}{formatCurrency(price.plans.full.discount)}</strong></li>}
                  {schoolKit?.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
              {courseKit !== false && courseKit.images?.full.src && (
                <div className="mt-3">
                  <img src={courseKit.images.full.src} style={{ width: '100%' }} alt="kit" />
                </div>
              )}
            </div>
          )
          : (
            <div className={`${styles.box} ${styles.partBox} ${styles.roundedBottom}`} style={{ backgroundColor: courseKit !== false ? courseKit.images?.part.backgroundColor : undefined, color: courseKit !== false ? courseKit.images?.part.color : undefined, borderColor: courseKit !== false ? courseKit.images?.part.borderColor : undefined }}>
              <div className={styles.sidePadding}>
                <h3 className={styles.boxTitle}>Installment Plan</h3>
                <ul className={`${styles.planList} mb-0`}>
                  {courseKit !== false && courseKit.partBullets.map((b, i) => <li key={i}>{b}</li>)}
                  {price && price.plans.full.discount > 0 && <li><strong>Start for {price.currency.symbol}{formatCurrency(price.plans.part.deposit)}</strong></li>}
                  {schoolKit?.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
              {courseKit !== false && courseKit.images?.part.src && (
                <div className="mt-3">
                  <img src={courseKit.images.part.src} style={{ width: '100%' }} alt="kit" />
                </div>
              )}
            </div>
          )
        }
        {courseKit !== false && courseKit.details && (
          <div className="mt-2">
            {courseKit.details}
          </div>
        )}
      </div>
      <div className="col-12 col-sm-10">
        <PlanResult shippingOptionReversed={false} />
        {price && price.courses.length > 0 && price?.countryCode === 'CA' && (
          <div>
            <Card className="mt-4 text-center" style={{ marginLeft: 'auto' }}>
              <CardBody>
                <CanadaTaxCredits />
              </CardBody>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
