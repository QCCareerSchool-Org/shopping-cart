import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { CSSProperties, FC, MouseEventHandler, useMemo } from 'react';

import { Card, CardBody } from 'reactstrap';
import { useDispatchContext } from '../../../hooks/useDispatchContext';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';
import { School } from '../../../lib/enrollment';
import { formatCurrency } from '../../../lib/formatCurrency';
import { CanadaTaxCredits } from '../CanadaTaxCredits';
import { PlanResult } from '../PlanResult';
import { Checkmark } from './Checkmark';
import styles from './index.module.css';
import { courseKits, schoolKits } from './kits';

type Props = {
  school: School;
};

export const VisualPaymentPlansDesktop: FC<Props> = ({ school }) => {
  const screenWidth = useScreenWidthContext();
  const { price, payment, courses } = useStateContext();
  const dispatch = useDispatchContext();

  const sm = screenWidth >= 576;
  const md = screenWidth >= 768;
  const lg = screenWidth >= 992;
  const xl = screenWidth >= 1200;

  const screenSize = xl ? 'xl' : lg ? 'lg' : md ? 'md' : sm ? 'sm' : 'xs' as const;

  const handleFullClick: MouseEventHandler = () => {
    dispatch({ type: 'SET_PAYMENT_PLAN', payload: 'full' });
  };

  const handlePartClick: MouseEventHandler = () => {
    dispatch({ type: 'SET_PAYMENT_PLAN', payload: 'part' });
  };

  const schoolKit = schoolKits[school];

  const courseKit = useMemo(() => {
    for (const c of courseKits) {
      if (Array.isArray(c.courseCode) && c.courseCode.some(f => courses.selected.includes(f))) {
        return c;
      }
      if (typeof c.courseCode === 'string' && courses.selected.includes(c.courseCode)) {
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
            : school === 'Winghill Writing School'
              ? styles.writingCorner
              : undefined;

  const fullStyle: CSSProperties = {
    cursor: 'pointer',
    backgroundColor: schoolKit?.images?.full.backgroundColor ?? (courseKit !== false ? courseKit.images?.full.backgroundColor : undefined),
    color: schoolKit?.images?.full.color ?? (courseKit !== false ? courseKit.images?.full.color : undefined),
    borderColor: schoolKit?.images?.full.borderColor ?? (courseKit !== false ? courseKit.images?.full.borderColor : undefined),
  };

  const partStyle: CSSProperties = {
    cursor: 'pointer',
    backgroundColor: schoolKit?.images?.part.backgroundColor ?? (courseKit !== false ? courseKit.images?.part.backgroundColor : undefined),
    color: schoolKit?.images?.part.color ?? (courseKit !== false ? courseKit.images?.part.color : undefined),
    borderColor: schoolKit?.images?.part.borderColor ?? (courseKit !== false ? courseKit.images?.part.borderColor : undefined),
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-lg-8">
        <div className="row mb-4 mb-lg-0">
          <div className={`${styles.fullColumn} col-6`}>
            <div onClick={handleFullClick} className={`${styles.box} ${styles.fullBox} ${cornerStyle} ${styles.rounded} ${payment.plan === 'full' ? styles.selected : styles.faded}`} style={fullStyle}>
              <div className={styles.sidePadding}>
                <h3 className={styles.boxTitle}>Pay in Full{payment.plan === 'full' && <> <Checkmark /></>}</h3>
                <ul className={styles.planList}>
                  {price && price.plans.full.discount > 0 && <li><strong>Save {price.currency.symbol}{formatCurrency(price.plans.full.discount)}</strong></li>}
                  {courseKit !== false && courseKit.fullBullets.map((b, i) => <li key={i}>{b}</li>)}
                  {schoolKit?.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
              {courseKit !== false && courseKit.images
                ? (
                  <>
                    <div style={{ height: courseKit.images.height[screenSize], position: 'relative' }}>
                      {courseKit.images.full.src
                        ? <img src={courseKit.images.full.src} style={{ width: '100%' }} alt="kit" />
                        : <></>
                      }
                      {!courseKit.images.buttonBelow && (
                        <div className="d-flex justify-content-center" style={{ position: 'absolute', left: 0, right: 0, top: courseKit.images.buttonOffset[screenSize], width: '100%' }}>
                          <button onClick={handleFullClick} className={`btn ${courseKit.images.full.buttonVariant ? `btn-${courseKit.images.full.buttonVariant}` : 'btn-primary'} ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: payment.plan === 'full' ? 'none' : 'auto' }}>
                            {payment.plan === 'full' ? <><FontAwesomeIcon icon={faCheckCircle} />&nbsp;Selected</> : 'Select Plan'}
                          </button>
                        </div>
                      )}
                    </div>
                    {!!courseKit.images.buttonBelow && (
                      <div className="d-flex justify-content-center" style={{ width: '100%', marginTop: '0.5rem' }}>
                        <button onClick={handleFullClick} className={`btn ${courseKit.images.full.buttonVariant ? `btn-${courseKit.images.full.buttonVariant}` : 'btn-primary'} ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: payment.plan === 'full' ? 'none' : 'auto' }}>
                          {payment.plan === 'full' ? <><FontAwesomeIcon icon={faCheckCircle} />&nbsp;Selected</> : 'Select Plan'}
                        </button>
                      </div>
                    )}
                  </>
                )
                : schoolKit?.images
                  ? (
                    <>
                      <div style={{ height: schoolKit.images.height[screenSize], position: 'relative' }}>
                        {schoolKit.images.full.src
                          ? <img src={schoolKit.images.full.src} style={{ width: '100%' }} alt="kit" />
                          : <></>
                        }
                        {!schoolKit.images.buttonBelow && (
                          <div className="d-flex justify-content-center" style={{ position: 'absolute', left: 0, right: 0, top: schoolKit.images.buttonOffset[screenSize], width: '100%' }}>
                            <button onClick={handleFullClick} className={`btn ${schoolKit.images.full.buttonVariant ? `btn-${schoolKit.images.full.buttonVariant}` : 'btn-primary'} ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: payment.plan === 'full' ? 'none' : 'auto' }}>
                              {payment.plan === 'full' ? <><FontAwesomeIcon icon={faCheckCircle} />&nbsp;Selected</> : 'Select Plan'}
                            </button>
                          </div>
                        )}
                      </div>
                      {!!schoolKit.images.buttonBelow && (
                        <div className="d-flex justify-content-center" style={{ width: '100%', marginTop: '0.5rem' }}>
                          <button onClick={handleFullClick} className={`btn ${schoolKit.images.full.buttonVariant ? `btn-${schoolKit.images.full.buttonVariant}` : 'btn-primary'} ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: payment.plan === 'full' ? 'none' : 'auto' }}>
                            {payment.plan === 'full' ? <><FontAwesomeIcon icon={faCheckCircle} />&nbsp;Selected</> : 'Select Plan'}
                          </button>
                        </div>
                      )}
                    </>
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
          <div className={`${styles.partColumn} col-6`}>
            <div onClick={handlePartClick} className={`${styles.box} ${styles.partBox} ${styles.rounded} ${payment.plan !== 'full' ? styles.selected : styles.faded}`} style={partStyle}>
              <div className={styles.sidePadding}>
                <h3 className={styles.boxTitle}>Installment Plan{payment.plan === 'part' && <> <Checkmark /></>}</h3>
                <ul className={styles.planList}>
                  {price && price.plans.full.discount > 0 && <li><strong>Start for {price.currency.symbol}{formatCurrency(price.plans.part.deposit)}</strong></li>}
                  {courseKit !== false && courseKit.partBullets.map((b, i) => <li key={i}>{b}</li>)}
                  {schoolKit?.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
              {courseKit !== false && courseKit.images
                ? (
                  <>
                    <div style={{ height: courseKit.images.height[screenSize], position: 'relative' }}>
                      {courseKit.images.part.src
                        ? <img src={courseKit.images.part.src} style={{ width: '100%' }} alt="kit" />
                        : <></>
                      }
                      {!courseKit.images.buttonBelow && (
                        <div className="d-flex justify-content-center" style={{ position: 'absolute', left: 0, right: 0, top: courseKit.images.buttonOffset[screenSize], width: '100%' }}>
                          <button onClick={handlePartClick} className={`btn ${courseKit.images.part.buttonVariant ? `btn-${courseKit.images.part.buttonVariant}` : 'btn-dark-grey'} ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: payment.plan === 'full' ? 'none' : 'auto' }}>
                            {payment.plan !== 'full' ? <><FontAwesomeIcon icon={faCheckCircle} />&nbsp;Selected</> : 'Select Plan'}
                          </button>
                        </div>
                      )}
                    </div>
                    {!!courseKit.images.buttonBelow && (
                      <div className="d-flex justify-content-center" style={{ width: '100%', marginTop: '0.5rem' }}>
                        <button onClick={handlePartClick} className={`btn ${courseKit.images.part.buttonVariant ? `btn-${courseKit.images.part.buttonVariant}` : 'btn-dark-grey'} ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: payment.plan === 'full' ? 'none' : 'auto' }}>
                          {payment.plan !== 'full' ? <><FontAwesomeIcon icon={faCheckCircle} />&nbsp;Selected</> : 'Select Plan'}
                        </button>
                      </div>
                    )}
                  </>
                )
                : schoolKit?.images
                  ? (
                    <>
                      <div style={{ height: schoolKit.images.height[screenSize], position: 'relative' }}>
                        {schoolKit.images.part.src
                          ? <img src={schoolKit.images.part.src} style={{ width: '100%' }} alt="kit" />
                          : <></>
                        }
                        {!schoolKit.images.buttonBelow && (
                          <div className="d-flex justify-content-center" style={{ position: 'absolute', left: 0, right: 0, top: schoolKit.images.buttonOffset[screenSize], width: '100%' }}>
                            <button onClick={handlePartClick} className={`btn ${schoolKit.images.part.buttonVariant ? `btn-${schoolKit.images.part.buttonVariant}` : 'btn-dark-grey'} ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: payment.plan === 'full' ? 'none' : 'auto' }}>
                              {payment.plan !== 'full' ? <><FontAwesomeIcon icon={faCheckCircle} />&nbsp;Selected</> : 'Select Plan'}
                            </button>
                          </div>
                        )}
                      </div>
                      {!!schoolKit.images.buttonBelow && (
                        <div className="d-flex justify-content-center" style={{ width: '100%', marginTop: '0.5rem' }}>
                          <button onClick={handlePartClick} className={`btn ${schoolKit.images.part.buttonVariant ? `btn-${schoolKit.images.part.buttonVariant}` : 'btn-dark-grey'} ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: payment.plan === 'full' ? 'none' : 'auto' }}>
                            {payment.plan !== 'full' ? <><FontAwesomeIcon icon={faCheckCircle} />&nbsp;Selected</> : 'Select Plan'}
                          </button>
                        </div>
                      )}
                    </>
                  )
                  : (
                    <div className="d-flex justify-content-center">
                      <button onClick={handlePartClick} className={`btn btn-dark-grey ${styles.rounded}`} style={{ textTransform: 'uppercase', width: 130, pointerEvents: payment.plan === 'full' ? 'none' : 'auto' }}>
                        {payment.plan !== 'full' ? <><FontAwesomeIcon icon={faCheckCircle} />&nbsp;Selected</> : 'Select Plan'}
                      </button>
                    </div>
                  )
              }
            </div>
          </div>
          {courseKit !== false && courseKit.details && (
            <div className="col-12 mt-2">
              {courseKit.details}
            </div>
          )}
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
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
