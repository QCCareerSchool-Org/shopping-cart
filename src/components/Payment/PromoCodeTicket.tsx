/* eslint-disable @typescript-eslint/no-magic-numbers */
import { faChevronUp, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { useDateContext } from '../../hooks/useDateContext';

import { useScreenWidthContext } from '../../hooks/useScreenWidthContext';
import { dateOverride } from '../../lib/dateOverride';
import { PromoCode } from '../PromoCode';

type Props = {
  code: string;
  description: React.ReactNode;
  desktopImageSrc: string;
  mobileImageSrc: string;
  altText: string;
  expiryDate?: Date;
  displayExpiryDate?: Date;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  expanded: boolean;
  setExpanded: (value: boolean) => void;
};

const getEndOfMonth = (): Date => {
  const endOfMonth = new Date();
  endOfMonth.setMonth(endOfMonth.getMonth() + 1);
  endOfMonth.setDate(0);
  endOfMonth.setHours(23, 59, 59, 999);
  return endOfMonth;
};

const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
const formatDate = (date: Date): string => {
  return `${months[date.getMonth()]} ${date.getDate()}`;
};

export const PromoCodeTicket: React.FC<Props> = ({ code, description, desktopImageSrc, mobileImageSrc, altText, expiryDate, displayExpiryDate, onClick, expanded, setExpanded }) => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const width = useScreenWidthContext();

  const desktop = width >= 450;

  const fallbackExpiryDate = expiryDate ?? getEndOfMonth();

  if (displayExpiryDate) {
    displayExpiryDate.setHours(23, 59, 59, 999);
  }

  const endDate = displayExpiryDate && displayExpiryDate.getTime() >= date.getTime() ? displayExpiryDate : fallbackExpiryDate;

  const endsSoon = endDate.getTime() - date.getTime() < 1000 * 60 * 60 * 24 * 3; // less than 3 days remaining
  const lastChance = endDate.getTime() - date.getTime() < 1000 * 60 * 60 * 36; // less than 36 hours remaining

  return (
    <>
      <Card className="mt-3">
        <CardBody className="p-0">
          <div className="d-flex align-items-stretch justify-content-between">
            <div className="w-50">
              <img src={desktop ? desktopImageSrc : mobileImageSrc} alt={altText} className="img-fluid" />
            </div>
            <div className="w-50 d-flex flex-column align-items-center justify-content-around px-2">
              <div className="text-center">
                {desktop
                  ? <h5 className="mb-0 mt-2"><PromoCode>{code}</PromoCode></h5>
                  : <small className="m-0"><PromoCode>{code}</PromoCode></small>
                }
              </div>
              <div className="text-center">
                <button className={`btn btn-secondary ${!desktop && 'btn-sm'}`} onClick={onClick}><FontAwesomeIcon icon={faTag} /> Apply {desktop && 'Code'}</button>
                <div className={`${desktop ? '' : 'mt-2'}`} style={{ lineHeight: '1rem' }}>
                  <button onClick={() => setExpanded(true)} className="btn btn-link p-0 border-0 btn-no-hover-shadow" style={{ lineHeight: 'inherit' }}><small>details</small></button>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      {expanded && (
        <div className="alert alert-info alert-dismissible mb-0">
          <FontAwesomeIcon icon={faChevronUp} className="mr-2" />{' '}
          {description}
          <hr />
          <strong>Expires:</strong>{' '}{formatDate(endDate)}{' '}{lastChance ? <strong className="text-danger">Last chance!</strong> : endsSoon && <strong className="text-danger">Ends soon!</strong>}
          <button onClick={() => setExpanded(false)} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </>
  );
};
