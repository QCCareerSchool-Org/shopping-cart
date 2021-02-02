import React from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { FreePortfolioPromo } from './FreePortfolioPromo';

const FreePortfolio: React.FC = () => (
  <>
    <FreePortfolioPromo />
    <Form
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={() => <Guarantee />}
      allowNoShipping={true}
      agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
      successLink="https://www.qceventplanning.com/welcome-to-the-school/"
      additionalOptions={{ portfolio: true }}
    />
  </>
);

export default FreePortfolio;
