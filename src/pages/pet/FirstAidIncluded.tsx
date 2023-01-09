import React, { FC } from 'react';

import FirstAidLogo from '../../fa-icon-small.svg';
import { useScreenWidthContext } from '../../hooks/useScreenWidthContext';

export const FirstAidIncluded: FC = () => {
  const screenWidth = useScreenWidthContext();
  return (
    <div className="text-uppercase d-flex justify-content-center" style={{ color: '#e9213e' }}>
      <img src={FirstAidLogo} className="mr-2" />
      <div className="text-center"><strong>Free first aid training</strong>{screenWidth < 576 ? <br /> : ' '}included with all courses</div>
    </div>
  );
};
