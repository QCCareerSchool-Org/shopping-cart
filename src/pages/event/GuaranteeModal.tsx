import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import guarantee from '../../21-day.svg';

export interface Props {
  isOpen: boolean;
  toggle: () => void;
}

export const GuaranteeModal: React.FC<Props> = props => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>21-Day Money-Back Guarantee</ModalHeader>
      <ModalBody>
        <div className="row">
          <div className="col-4 d-none d-sm-block">
            <img className="img-fluid w-100" src={guarantee} alt="21-Day Money-Back Guarantee" />
          </div>
          <div className="col-12 col-sm-8">
            <p>We stand behind our quality courses. That&apos;s why we offer a full money-back guarantee. From the date you enroll, you have 21 days to review the course materials.</p>
            <p>If you do not find that the course is a good fit for you, simply return the materials, unused, with a tracking number, and your course fees will be immediately refunded. All that we ask is that you call the School to receive shipping instructions.</p>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};
