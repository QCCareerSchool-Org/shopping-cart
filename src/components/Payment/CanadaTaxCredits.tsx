import React from 'react';
import type { FC, MouseEventHandler } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { usePopup } from '../../hooks/usePopup';

export const CanadaTaxCredits: FC = () => {
  const [ popup, togglePopup ] = usePopup(false);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    togglePopup();
  };

  return (
    <>
      <div>
        <h5 className="mb-1"><img src={require('../../images/maple-leaf-red.svg').default} height="20" alt="maple leaf" /> Canadian Students Save!</h5>
        <p className="mb-0">You could save more than 50% on your course fees. <a onClick={handleClick} style={{ whiteSpace: 'nowrap' }} href="#">Learn more</a></p>
      </div>
      <Modal isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}><img src={require('../../images/maple-leaf-red.svg').default} height="18" style={{ position: 'relative', top: -1 }} alt="maple leaf" /> Canadian, Eh?</ModalHeader>
        <ModalBody>
          <p>QC is a <strong>certified educational institution</strong> with Employment and Social Development Canada (ESDC). At the end of the year, we&apos;ll be sending you a T2202 tax receipt for the course fees you paid during the year. You can use the receipt to get a tax refund.</p>
          <p>You&apos;ll be able to claim:</p>
          <ul className="mb-0">
            <li>The Canada Training Credit and</li>
            <li>The Tuition Tax Credit</li>
          </ul>
        </ModalBody>
        <ModalFooter><small>Rules for the way the credits work reflect your personal tax situation. Please reach out to your personal accountant for further guidance.</small></ModalFooter>
      </Modal>
    </>
  );
};
