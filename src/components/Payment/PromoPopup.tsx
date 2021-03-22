import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { useStateContext } from '../../hooks/useStateContext';
import { PromoCode } from './PromoCode';

type Props = {
  popup: boolean;
  togglePopup: () => void;
  apply: (code: string) => void;
}

type Promo = {
  code: string;
  description: string;
  desktopImageSrc: any;
  mobileImageSrc: any;
}

export const PromoPopup: React.FC<Props> = ({ popup, togglePopup, apply }) => {
  const { price } = useStateContext();

  const promos: Promo[] = [
    {
      code: 'SAVE50',
      description: 'Get 50% off additional courses of equal or lesser value',
      desktopImageSrc: require('./images/coupon-SAVE50.jpg'),
      mobileImageSrc: require('./images/coupon-mobile-SAVE50.jpg'),
    },
    {
      code: 'ADVANCED100',
      description: `Get ${price?.currency.code === 'GBP' ? '£100' : '$100'} off any advanced course`,
      desktopImageSrc: require('./images/coupon-ADVANCED100.jpg'),
      mobileImageSrc: require('./images/coupon-mobile-ADVANCED100.jpg'),
    },
    {
      code: 'ELITE',
      description: 'Get an elite makeup kit upgrade',
      desktopImageSrc: require('./images/coupon-ELITE.jpg'),
      mobileImageSrc: require('./images/coupon-mobile-ELITE.jpg'),
    },
  ];

  return (
    <Modal isOpen={popup} toggle={togglePopup}>
      <ModalHeader toggle={togglePopup}>Current Promo Codes</ModalHeader>
      <ModalBody className="pt-0">
        {promos.map(p => (
          <PromoCode
            key={p.code}
            code={p.code}
            description={p.description}
            desktopImageSrc={p.desktopImageSrc}
            mobileImageSrc={p.mobileImageSrc}
            onClick={() => { apply(p.code); togglePopup(); }}
          />
        ))}
      </ModalBody>
      <ModalFooter className="justify-content-start">
        <p><strong>Please note:</strong> Promo codes can not be combined</p>
      </ModalFooter>
    </Modal>
  );
};
