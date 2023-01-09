import React, { FC } from 'react';

import FirstAidLogo from '../../fa-icon-small.svg';
import { useScreenWidthContext } from '../../hooks/useScreenWidthContext';

export const FirstAidIncluded: FC = () => {
  const screenWidth = useScreenWidthContext();
  return (
    <div className="text-uppercase d-flex align-items-center justify-content-center">
      <img src={FirstAidLogo} width="30" height="30" className="mr-2 d-block" />
      <div className="text-center"><strong><span style={{ color: '#e9213e' }}>Free first aid training</span>{screenWidth < 576 ? <br /> : ' '}included with all courses</strong></div>
    </div>
  );
};
