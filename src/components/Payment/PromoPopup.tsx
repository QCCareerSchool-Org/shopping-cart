import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { Promo } from './PromoCodeInput';
import { PromoCodeTicket } from './PromoCodeTicket';

type Props = {
  popup: boolean;
  togglePopup: () => void;
  apply: (code: string) => void;
  promos: Promo[];
}

export const PromoPopup: React.FC<Props> = ({ popup, togglePopup, apply, promos }) => {
  const [ allExpanded, setAllExpanded ] = useState(Array(promos.length).fill(undefined).map(() => false));

  const setIndexExpanded = (index: number, value: boolean) => {
    setAllExpanded(expanded => expanded.map((e, i) => i === index ? value : false));
  };

  return (
    <Modal isOpen={popup} toggle={togglePopup}>
      <ModalHeader toggle={togglePopup}>Current Promo Codes</ModalHeader>
      <ModalBody className="pt-0">
        {promos.map((p, i) => (
          <PromoCodeTicket
            key={p.code}
            code={p.code}
            description={p.description}
            desktopImageSrc={p.desktopImageSrc}
            mobileImageSrc={p.mobileImageSrc}
            altText={p.altText}
            onClick={() => { apply(p.code); togglePopup(); }}
            expanded={allExpanded[i]}
            setExpanded={(value: boolean) => setIndexExpanded(i, value)}
          />
        ))}
      </ModalBody>
      <ModalFooter className="justify-content-start">
        <p><strong>Please note:</strong> Promo codes can not be combined</p>
      </ModalFooter>
    </Modal>
  );
};
