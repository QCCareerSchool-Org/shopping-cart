import React, { MouseEvent } from 'react';

import { usePopup } from '../../hooks/usePopup';
import { GuaranteeModal } from './GuaranteeModal';

export const Guarantee: React.FC = () => {
  const [ popup, togglePopup ] = usePopup(false);

  return (
    <div className="row d-flex align-items-center">
      <div className="col-12 col-md-6 text-center text-md-right mb-3 mb-md-0">
        <button type="button" className="btn btn-link p-0 btn-no-hover-shadow" onClick={handleClick}><img src={require('../../21-day.svg')} width="97" height="100" className="img-fluid" alt="21-Day Money-Back Guarantee" /></button>
      </div>
      <div className="col-12 col-md-6 text-center text-md-left">
        <h5>21-Day Money-Back Guarantee</h5>
        <button type="button" className="btn btn-link p-0 p-0 btn-no-hover-shadow" onClick={handleClick}>Learn More</button>
      </div>
      <GuaranteeModal isOpen={popup} toggle={togglePopup} />
    </div>
  );

  function handleClick(event: MouseEvent): void {
    togglePopup();
  }
};
