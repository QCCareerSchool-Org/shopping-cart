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

const hasImage = (courseCode?: string): boolean => typeof courseCode !== 'undefined' && [ 'MZ', 'HS', 'SF', 'DG' ].includes(courseCode);

const getCertification = (courseCode?: string): string | undefined => {
  switch (courseCode) {
    case 'DG':
      return 'International Dog Grooming Professional';
    case 'DT':
      return 'International Dog Training Professional';
    case 'DD':
      return 'International Dog Care Professional';
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
          <img className="img-fluid mr-3" src={require(`./certifications/${courseCode?.toLocaleLowerCase()}.svg`)} alt="certification" />
          <div>
            <h4 className="m-0">{courseCard.name}</h4>
            {certification && lgOrGreater && <span>{certification}</span>}
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: courseCard.description }} />
        {hasImage(courseCode) && <img className="img-fluid" src={require(`./kits/${courseCode?.toLocaleLowerCase()}.jpg`)} alt="makeup kit" />}
        <hr />
        <p className="card-text">Tuition before discounts: <strong>{courseCard.currency.symbol}{courseCard.cost.toFixed(decimalDigits)}</strong></p>
      </CardBody>
    </Card>
  );
};
