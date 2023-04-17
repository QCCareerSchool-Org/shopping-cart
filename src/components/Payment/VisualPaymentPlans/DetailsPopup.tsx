import React, { FC, MouseEventHandler, PropsWithChildren } from 'react';

import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { usePopup } from '../../../hooks/usePopup';

type Props = {
  title: string;
  footerText?: string | JSX.Element;
};

export const DetailsPopup: FC<PropsWithChildren<Props>> = ({ title, footerText, children }) => {
  const [ popup, togglePopup ] = usePopup(false);

  const handleClick: MouseEventHandler = e => {
    e.preventDefault();
    togglePopup();
  };

  return (
    <>
      <div className="text-center">
        <a href="#" onClick={handleClick}>View Kit Details</a>
      </div>
      <Modal isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>{title}</ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        {footerText && <ModalFooter>{footerText}</ModalFooter>}
      </Modal>
    </>
  );
};
