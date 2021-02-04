import React from 'react';

import { useScreenWidthContext } from '../../hooks/useScreenWidthContext';
import { PriceResult } from '../../state/price';

interface Props {
  price: PriceResult;
  showBuyOneGetOne?: boolean;
}

export const CourseTable: React.FC<Props> = ({ price, showBuyOneGetOne }) => {
  const screenWidth = useScreenWidthContext();
  return (
    <>
      {price.courses.length > 0 && (
        <>
          {showBuyOneGetOne && screenWidth < 768 && (
            <div className="mt-4 alert alert-info">
              Get your next course of equal or lesser value <strong>50% off</strong>!
            </div>
          )}
          <h3>Selected Courses</h3>
          <table className="w-100">
            <tbody>
              {price.courses.map(course => (
                <React.Fragment key={course.code}>
                  <tr key={course.code}>
                    <td>{course.name}{course.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
                    <td className="text-right text-nowrap align-bottom">{price.currency.symbol}{(course.free ? 0 : course.cost).toFixed(2)}</td>
                  </tr>
                  {!course.free && course.multiCourseDiscount > 0 && (
                    <tr key={course.code + '_discount'} className="text-primary">
                      <td>{Math.round(course.multiCourseDiscount / course.cost * 100)}% Discount</td>
                      <td className="text-right text-nowrap align-bottom">&minus; {price.currency.symbol}{course.multiCourseDiscount.toFixed(2)}</td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
              {price.promoDiscount > 0 && (
                <>
                  <tr><td colSpan={2}><hr /></td></tr>
                  <tr>
                    <td>Promotional Discount</td>
                    <td className="text-right text-nowrap align-bottom">&minus; {price.currency.symbol}{price.promoDiscount.toFixed(2)}</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
          {showBuyOneGetOne && screenWidth >= 768 && price.courses.filter(c => !c.free).length === 1 && (
            <div className="mt-4 alert alert-info">
              Get your next course of equal or lesser value <strong>50% off</strong>!
            </div>
          )}
        </>
      )}
    </>
  );
};
