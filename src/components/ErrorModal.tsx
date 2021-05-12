import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

type Props = {
  isOpen: boolean;
  toggle: () => void;
  title: string;
  message?: string | JSX.Element;
};

/**
 * A popup that explains the latest enrollment error
 */
export const ErrorModal: React.FC<Props> = ({ isOpen, toggle, title, message }) => (
  <Modal size="sm" isOpen={isOpen} toggle={toggle}>
    <ModalHeader toggle={toggle}>{title}</ModalHeader>
    <ModalBody>{message}</ModalBody>
  </Modal>
);
