/* eslint-disable @typescript-eslint/no-magic-numbers */
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { telephoneNumber } from '@qccareerschool/helper-functions';
import React from 'react';

import { useScreenWidthContext } from '../../hooks/useScreenWidthContext';

type Props = {
  countryCode: string;
  link?: boolean;
};

export const Header: React.FC<Props> = ({ countryCode, link = true }) => {
  const screenWidth = useScreenWidthContext();
  const tel = telephoneNumber(countryCode);

  return (
    <header id="header">
      <div className="container my-3 my-sm-4">
        <div className="row">
          <div className="col-9 col-sm-12 text-left text-sm-center">
            {link
              ? <a href="https://www.doggroomingcourse.com/"><img id="logo" src={require('./logo.svg').default} width="465" height="44" alt="QC Pet Studies" /></a>
              : <img id="logo" src={require('./logo.svg').default} width="465" height="44" alt="QC Pet Studies" />
            }
          </div>
          <div className="col-3 d-block d-sm-none text-right"><a title="Click to Call" href={'tel:' + tel}><FontAwesomeIcon style={{ fontSize: screenWidth < 360 ? 24 : 30 }} icon={faPhone} /></a></div>
        </div>
      </div>
    </header>
  );
};
