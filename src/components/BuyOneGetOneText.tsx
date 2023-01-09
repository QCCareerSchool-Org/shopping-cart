import React, { FC } from 'react';
import { useScreenWidthContext } from '../hooks/useScreenWidthContext';

export const BuyOneGetOneText: FC = () => {
  const screenWidth = useScreenWidthContext();
  return (
    <div className="text-center text-uppercase">
      <strong>Save 50%</strong> on each additional course{screenWidth < 768 ? <br /> : ' '}of equal or lesser value
    </div>
  );
};
