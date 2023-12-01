import React, { FC } from 'react';

import { usePopup } from '../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../hooks/useScreenWidthContext';
import { DesignFallbackModal } from './modal';

const backgroundColor = '#4f4c43';

export const DesignFallbackPromo: FC = () => {
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 520;

  let image: string;
  let width: number;
  let height: number;

  if (desktop) {
    image = require('./desktop.jpg');
    width = 1257;
    height = 608;
  } else {
    image = require('./mobile.jpg');
    width = 514;
    height = 556;
  }

  return (
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
      <div className="container text-center px-0">
        <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </button>
      </div>
      <DesignFallbackModal isOpen={popup} onToggle={togglePopup} />
    </section>
  );
};
