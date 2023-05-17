import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Card, CardBody } from 'reactstrap';
import { useScreenWidthContext } from '../../hooks/useScreenWidthContext';

import { useStateContext } from '../../hooks/useStateContext';

type Props = {
  courseCode?: string;
};

type CourseCardData = {
  name: string;
  cost: number;
  currency: {
    symbol: string;
    name: string;
    code: string;
  };
  description: string;
};

const hasImage = (courseCode?: string): boolean => typeof courseCode !== 'undefined' && [ 'HS', 'SF', 'DG', 'AB', 'CC', 'DB', 'ED', 'FD', 'FS', 'I2', 'LD', 'MS', 'PO', 'ST' ].includes(courseCode);

const getCertification = (courseCode?: string): string | undefined => {
  switch (courseCode) {
    case 'DG':
      return 'International Dog Grooming Professional';
    case 'DT':
      return 'International Dog Training Professional';
    case 'DD':
      return 'International Dog Care Professional';
    case 'I2':
      return 'International Design and Decorating Professional';
    case 'ST':
    case 'MS':
      return 'International Staging and Redesign Professional';
    case 'LD':
      return 'International Landscape Design Professional';
    case 'PO':
      return 'Advanced International Organizing Professional';
    case 'FS':
      return 'Advanced Feng Shui Design Professional';
    case 'CC':
      return 'International Color Consulting Professional';
    case 'FD':
      return 'International Floral Design Professional';
    case 'ED':
      return 'International Event Decor Professional';
    case 'AP':
      return 'Aging in Place Design Professional';
  }
};

const decimalDigits = 2;

export const CourseCard: React.FC<Props> = ({ courseCode }) => {
  const { address: { countryCode, provinceCode } } = useStateContext();
  const screenWidth = useScreenWidthContext();

  const lgOrGreater = screenWidth >= 992;

  const fetchCourseCard = async (): Promise<CourseCardData | undefined> => {
    if (typeof courseCode === 'undefined') {
      return;
    }
    const url = 'https://api.qccareerschool.com/courseCards';
    const params = { courseCode, countryCode, provinceCode };
    const response = await axios.get<CourseCardData>(url, { params });
    return response.data;
  };

  const { data: courseCard, isError } = useQuery([ 'courseCard', courseCode, countryCode, provinceCode ], fetchCourseCard);

  if (isError) {
    return null;
  }

  if (!courseCard) {
    return null;
  }

  const certification = getCertification(courseCode);

  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center mb-3">
          <img className="img-fluid mr-3" src={require(`./certifications/${courseCode?.toLocaleLowerCase()}.svg`)} style={{ maxHeight: 110 }} alt="certification" />
          <div>
            <h4 className="m-0">{courseCard.name}</h4>
            {certification && lgOrGreater && <span>{certification}</span>}
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: courseCard.description }} />
        {hasImage(courseCode) && <img className="img-fluid" src={require(`./kits/${courseCode?.toLocaleLowerCase()}.jpg`)} alt="kit" />}
        <hr />
        <p className="card-text">Tuition before discounts: <strong>{courseCard.currency.symbol}{courseCard.cost.toFixed(decimalDigits)}</strong></p>
      </CardBody>
    </Card>
  );
};
