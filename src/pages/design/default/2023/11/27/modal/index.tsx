import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

export const Design20231127Modal: React.FC<Props> = props => (
  <Modal isOpen={props.isOpen} toggle={props.onToggle}>
    <ModalHeader toggle={props.onToggle}>Cyber Monday Special Offer</ModalHeader>
    <ModalBody>
      <p className="lead">Start Your Design Career</p>
      <p>For a limited time, enroll in a design course and get business templates, <i>Design Files</i> software, AND any second course free!</p>
      <figure>
        <img src={require('./design-files.jpg')} alt="books" className="img-fluid" />
        <figcaption className="h6">4 Months Of Design Files Software FREE</figcaption>
      </figure>
      <figure>
        <img src={require('./downloads.jpg')} alt="books" className="img-fluid" />
        <figcaption className="h6">Career Essentials Kit With Business Templates</figcaption>
      </figure>
      <figure className="mb-0">
        <img src={require('./books.jpg')} alt="books" className="img-fluid" />
        <figcaption className="h6 mb-0">Printed Course Textbooks</figcaption>
      </figure>
    </ModalBody>
  </Modal>
);
