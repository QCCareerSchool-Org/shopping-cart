import React, { useEffect } from 'react';
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
};

const getUrl = (countryCode: string, provinceCode: string | null, courseCode?: string) => {
  let url = 'https://api.qccareerschool.com/courseCards?countryCode=' + encodeURIComponent(countryCode);
  if (provinceCode !== null) {
    url += '&provinceCode=' + encodeURIComponent(provinceCode);
  }
  if (courseCode) {
    url += '&courseCode=' + encodeURIComponent(courseCode ?? '');
  }
  return url;
};

export const CourseCard: React.FC<Props> = ({ courseCode }) => {
  const { address: { countryCode, provinceCode } } = useStateContext();
  const [ courseCard, refetch, isLoading, isError ] = useFetchImproved<CourseCard | undefined>(getUrl(countryCode, provinceCode, courseCode), undefined);

  useEffect(() => {
    refetch(getUrl(countryCode, provinceCode, courseCode));
  }, [ refetch, courseCode, countryCode, provinceCode ]);

  if (isError) {
    return null;
  }

  if (typeof courseCard === 'undefined') {
    return null;
  }

  return (
    <>
      <Card>
        <CardBody>
          <h4 className="card-title">{courseCard.name}</h4>
          <p className="card-text">The Master Makeup Artistry course is great for the students who want a perfect look for your work. The Master makeup artistry course was developed by the College of Art in partnership with Creative &amp; Creative Services, and was the subject of several projects including an illustration of the original art.</p>
          <p className="card-text">Students who take this course will be required to learn the skills needed to create and create the designs you desire. Students will have the opportunity to learn how to make the most of their creations, while continuing to create a great portfolio of your work, without making a mistake, and without doing anything that is not possible.</p>
          <hr />
          <p className="card-text">Price before discounts: <strong>{courseCard.currency.symbol}{courseCard.cost.toFixed(2)}</strong></p>
        </CardBody>
      </Card>
    </>
  );
};
