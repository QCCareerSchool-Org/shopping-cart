import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { telephoneNumber } from '@qccareerschool/helper-functions';
import React from 'react';

import { useScreenWidthContext } from '../../hooks/useScreenWidthContext';

type Props = {
  countryCode: string;
}

export const Header: React.FC<Props> = ({ countryCode }) => {
  const screenWidth = useScreenWidthContext();
  const tel = telephoneNumber(countryCode);

  const logo = screenWidth >= 588 ? require('./logo-lg.svg') : require('./logo-sm.svg');

  return (
    <header id="header">
    <div className="container py-3 py-sm-4">
      <div className="row">
        <div className="col-9 col-sm-12 text-left text-sm-center"><a href="https://www.winghill.com/"><img id="logo" src={logo} alt="Winghill Writing School" /></a></div>
        <div className="col-3 d-block d-sm-none text-right"><a title="Click to Call" href={'tel:' + tel}><FontAwesomeIcon style={{ fontSize: screenWidth < 360 ? 24 : 30 }} icon={faPhone} /></a></div>
      </div>
    </div>
  </header>
  );
};
