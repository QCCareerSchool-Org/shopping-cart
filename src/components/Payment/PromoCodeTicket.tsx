import { faChevronUp, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardBody } from 'reactstrap';

import { useScreenWidthContext } from '../../hooks/useScreenWidthContext';
import { PromoCode } from '../PromoCode';

type Props = {
  code: string;
  description: React.ReactNode;
  desktopImageSrc: string;
  mobileImageSrc: string;
  altText: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  expanded: boolean;
  setExpanded: (value: boolean) => void;
}

export const PromoCodeTicket: React.FC<Props> = ({ code, description, desktopImageSrc, mobileImageSrc, altText, onClick, expanded, setExpanded }) => {
  const width = useScreenWidthContext();

  const desktop = width >= 450;

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
                  ? <h5 className="m-0"><PromoCode>{code}</PromoCode></h5>
                  : <small className="m-0"><PromoCode>{code}</PromoCode></small>
                }
              </div>
              <div className="text-center">
                <button className="btn btn-secondary" onClick={onClick}><FontAwesomeIcon icon={faTag} /> Apply {desktop && 'Code'}</button>
                <div style={{ lineHeight: '1rem' }}>
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
          <button onClick={() => setExpanded(false)} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </>
  );
};
