import React, { MouseEvent } from 'react';

import { GuaranteeModal } from './GuaranteeModal';
import { usePopup } from '../../hooks/usePopup';

import guaranteeSVG from '../../21-day.svg';

export const Guarantee: React.FC = () => {
  const [ popup, togglePopup ] = usePopup(false);

  console.log('guarantee rerender'); // eslint-disable-line
  return (
    <div className="row d-flex align-items-center">
      <div className="col-12 col-md-6 text-center text-md-right mb-3 mb-md-0">
        <button type="button" className="btn btn-link p-0" onClick={togglePopup}><img src={guaranteeSVG} alt="21-Day Money-Back Guarantee" /></button>
      </div>
      <div className="col-12 col-md-6 text-center text-md-left">
        <h5>21-Day Money-Back Guarantee</h5>
        <button type="button" className="btn btn-link p-0" onClick={togglePopup}>Learn More</button>
      </div>
      <GuaranteeModal isOpen={popup} toggle={togglePopup} />
    </div>
  );
};
