import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

export const DesignFallbackModal: React.FC<Props> = props => (
  <Modal isOpen={props.isOpen} toggle={props.onToggle}>
    <ModalHeader toggle={props.onToggle}>Course Bonuses Included</ModalHeader>
    <ModalBody>
      <p className="lead">Career Essentials Collection</p>
      <p>Enroll in any design course to receive free design software as well as our brand new Career Essentials Collection filled with business &amp; social media templates!</p>
      <figure>
        <img src={require('./design-files.jpg')} alt="Design Files software" className="img-fluid mb-1" />
        <figcaption className="h6">4 Months of <i>Design Files</i> Software FREE</figcaption>
      </figure>
      <figure className="mb-0">
        <img src={require('./downloads.jpg')} alt="template downloads" className="img-fluid mb-1" />
        <figcaption className="h6">Career Essentials Kit With Business Templates</figcaption>
      </figure>
    </ModalBody>
  </Modal>
);
