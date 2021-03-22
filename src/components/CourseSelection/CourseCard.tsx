import axios from 'axios';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Card, CardBody } from 'reactstrap';

import { useFetchImproved } from '../../hooks/useFetchImproved';
import { useStateContext } from '../../hooks/useStateContext';

type Props = {
  courseCode?: string;
}

type CourseCard = {
  name: string;
  cost: number;
  currency: {
    symbol: string;
    name: string;
    code: string;
  };
  description: string;
};

export const CourseCard: React.FC<Props> = ({ courseCode }) => {
  const { address: { countryCode, provinceCode } } = useStateContext();

  const fetchCourseCard = async (): Promise<CourseCard | undefined> => {
    if (!courseCode) {
      return;
    }
    const url = 'https://api.qccareerschool.com/courseCards';
    const params = { courseCode, countryCode, provinceCode };
    const response = await axios.get<CourseCard>(url, { params });
    return response.data;
  };

  const { data: courseCard, isError } = useQuery([ 'courseCard', courseCode, countryCode, provinceCode ], fetchCourseCard);

  if (isError) {
    return null;
  }

  if (!courseCard) {
    return null;
  }

  return (
    <>
      <Card>
        <CardBody>
          <h4 className="card-title">{courseCard.name}</h4>
          {courseCard.description?.split('\n').map((s, i) => <p key={i} className="card-text" dangerouslySetInnerHTML={{ __html: s }}></p>)}
          <hr />
          <p className="card-text">Price before discounts: <strong>{courseCard.currency.symbol}{courseCard.cost.toFixed(2)}</strong></p>
        </CardBody>
      </Card>
    </>
  );
};
