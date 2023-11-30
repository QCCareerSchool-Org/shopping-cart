import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

export const DesignFallbackModal: React.FC<Props> = props => (
  <Modal isOpen={props.isOpen} toggle={props.onToggle}>
    <ModalHeader toggle={props.onToggle}>Career Essentials Collection</ModalHeader>
    <ModalBody>
      <p className="lead">Start Your Design Career</p>
      <p>For a limited time, enroll in a design course and get business templates and <i>Design Files</i> software!</p>
      <figure>
        <img src={require('./design-files.jpg')} alt="Design Files software" className="img-fluid mb-1" />
        <figcaption className="h6">4 Months Of Design Files Software FREE</figcaption>
      </figure>
      <figure className="mb-0">
        <img src={require('./downloads.jpg')} alt="template downloads" className="img-fluid mb-1" />
        <figcaption className="h6">Career Essentials Kit With Business Templates</figcaption>
      </figure>
    </ModalBody>
  </Modal>
);
