import React from 'react';
import { Card, CardBody, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useStateContext } from '../../hooks/useStateContext';

type Props = {
  popup: boolean;
  togglePopup: () => void;
  apply: (code: string) => void;
}

type Promo = {
  code: string;
  description: string;
}

export const PromoPopup: React.FC<Props> = ({ popup, togglePopup, apply }) => {
  const { price } = useStateContext();

  const promos: Promo[] = [
    { code: 'BOGO', description: 'Get 50% off each additional course' },
    { code: 'EXTRAKIT', description: 'Get a second makeup kit for free' },
    { code: 'SPRING2021', description: `Get ${price?.currency.code === 'GBP' ? '£75' : '$100'} off your tuition` },
    { code: 'EXTRAKIT', description: 'Get a second makeup kit for free' },
    { code: 'EXTRAKIT', description: 'Get a second makeup kit for free' },
  ];

  return (
    <Modal size="lg" isOpen={popup} toggle={togglePopup}>
      <ModalHeader toggle={togglePopup}>Current Promo Codes</ModalHeader>
      <ModalBody>
        {promos.map(p => (
          <Card key={p.code} className="mb-3">
            <CardBody>
              <div className="d-flex justify-content-between">
                <div><strong>{p.code}</strong></div>
                <div className="text-right">
                  <p>{p.description}</p>
                  <button onClick={() => { togglePopup(); apply(p.code); }} className="btn btn-secondary">Apply Code</button>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </ModalBody>
      <ModalFooter className="justify-content-start">
        <p><strong>Please note:</strong> Promo codes can not be combined</p>
      </ModalFooter>
    </Modal>
  );
};
