import React, { FC, MouseEventHandler } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { usePopup } from '../hooks/usePopup';
import Kit from '../images/grooming-kit-details.webp';
import Tag from '../kit-included-tag.svg';

export const DogGroomingKitTag: FC = () => {
  const [ popup, togglePopup ] = usePopup(false);

  const handleTagClick: MouseEventHandler = e => {
    e.preventDefault();
    togglePopup();
  };

  return (
    <>
      <a onClick={handleTagClick} href="#"><img src={Tag} style={{ position: 'absolute', height: 32, marginTop: -4, marginLeft: 6 }} alt="dog grooming kit included" /></a>
      <Modal size="md" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Dog Grooming Starter Kit</ModalHeader>
        <ModalBody>
          <p>When you enroll in <strong>Dog Grooming</strong>, you&apos;ll get QC&apos;s <strong>Dog Grooming Starter Kit</strong> for free!</p>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '-1rem' }}><img src={Kit} className="img-fluid" alt="dog grooming starter kit" /></div>
        </ModalBody>
        <ModalFooter>
          <div>The kit pictured above is included only when you enroll in the <strong>Dog Grooming</strong> course. Your kit will be automatically sent to you after you have submitted Unit B of the course in the Online Student Center. Items in the kit are subject to change.</div>
        </ModalFooter>
      </Modal>
    </>
  );
};
