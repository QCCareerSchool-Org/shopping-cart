import React from 'react';

import { BuyOneGetOne } from '../../../components/BuyOneGetOne';
import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { FreePortfolioPromo } from './FreePortfolioPromo';

const additionalOptions = { portfolio: true };

const FreePortfolio: React.FC = () => (
  <>
    <FreePortfolioPromo />
    <Form
      courseGroups={courseGroups}
      school="QC Event School"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
      successLink="https://www.qceventplanning.com/welcome-to-the-school/"
      additionalOptions={additionalOptions}
    />
  </>
);

export default FreePortfolio;
