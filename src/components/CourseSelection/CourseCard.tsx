import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Card, CardBody } from 'reactstrap';

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

const hasImage = (courseCode?: string): boolean => typeof courseCode !== 'undefined' && [ 'MZ', 'AB', 'HS', 'SF' ].includes(courseCode);

export const CourseCard: React.FC<Props> = ({ courseCode }) => {
  const { address: { countryCode, provinceCode } } = useStateContext();

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

  const decimalDigits = 2;

  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center mb-3">
          <img className="img-fluid mr-3" src={require(`./certifications/${courseCode?.toLocaleLowerCase()}.svg`)} alt="certification" />
          <h4 className="m-0">{courseCard.name}</h4>
        </div>
        <div dangerouslySetInnerHTML={{ __html: courseCard.description }} />
        {hasImage(courseCode) && <img className="img-fluid" src={require(`./kits/${courseCode?.toLocaleLowerCase()}.jpg`)} alt="makeup kit" />}
        <hr />
        <p className="card-text">Tuition before discounts: <strong>{courseCard.currency.symbol}{courseCard.cost.toFixed(decimalDigits)}</strong></p>
      </CardBody>
    </Card>
  );
};
