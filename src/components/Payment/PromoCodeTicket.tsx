import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { useScreenWidthContext } from '../../hooks/useScreenWidthContext';

type Props = {
  code: string;
  description: string;
  desktopImageSrc: string;
  mobileImageSrc: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const PromoCodeTicket: React.FC<Props> = ({ code, description, desktopImageSrc, mobileImageSrc, onClick }) => {
  const width = useScreenWidthContext();

  const desktop = width >= 450;

  return (
    <Card className="mt-3">
      <CardBody className="p-0">
        <div className="d-flex align-items-stretch justify-content-between">
          <div className="w-50">
            <img src={desktop ? desktopImageSrc : mobileImageSrc} alt={description} className="img-fluid" />
          </div>
          <div className="w-50 d-flex flex-column align-items-center justify-content-around px-2">
            <div className={`text-center ${desktop ? '' : 'my-2'}`}>
              {desktop
                ? <h5 className="m-0"><strong style={{ letterSpacing: '0.75px' }}>{code}</strong></h5>
                : <small className="m-0"><strong style={{ letterSpacing: '0.75px' }}>{code}</strong></small>
              }
            </div>
            <div className={`text-center ${desktop ? '' : 'my-2'}`}>
              <button className="btn btn-secondary" onClick={onClick}><FontAwesomeIcon icon={faTag} /> Apply {desktop && 'Code'}</button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
