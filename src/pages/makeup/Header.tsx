import React from 'react';

import { useScreenWidthContext } from '../../hooks/useScreenWidthContext';
import { useStateContext } from '../../hooks/useStateContext';

import logo from './logo.svg';

export const Header: React.FC = () => {
  const { address: { countryCode } } = useStateContext();
  const telephoneNumber = '1-732-345-345345'; // Helpers.telephoneNumber(countryCode);
  const screenWidth = useScreenWidthContext();

  return (
    <header id="header">
      <div className="container py-3 py-sm-4">
        <div className="row">
          <div className="col-9 col-sm-12 text-left text-sm-center"><a href="https://www.qcmakeupacademy.com/"><img id="logo" src={logo} alt="QC Makeup Academy" /></a></div>
          {/* <div className="col-3 d-block d-sm-none text-right"><a title="Click to Call" href={'tel:' + telephoneNumber}><FontAwesomeIcon style={{ fontSize: screenWidth < 360 ? 24 : 30 }} icon={faPhone} /></a></div> */}
        </div>
      </div>
    </header>
  );
};
