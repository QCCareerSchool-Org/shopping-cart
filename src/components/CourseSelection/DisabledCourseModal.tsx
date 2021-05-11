import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

type Props = {
  course: string;
  name: string;
  message: string | JSX.Element;
  isOpen: boolean;
  toggle: () => void;
};

/**
 * A popup that explains why a particular course selection is disabled
 */
export const DisabledCourseModal: React.FC<Props> = props => (
  <Modal isOpen={props.isOpen} toggle={props.toggle}>
    <ModalHeader toggle={props.toggle}>Why Can&apos;t I Take {props.name}?</ModalHeader>
    <ModalBody>{props.message}</ModalBody>
  </Modal>
);
