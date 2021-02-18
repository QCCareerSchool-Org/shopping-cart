import React from 'react';

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
      school="QC Design School"
      guarantee={() => <Guarantee />}
      shippingOption={true}
      agreementLink="https://www.qcdesignschool.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcdesignschool.com/enrollment-agreement-gb.html"
      successLink="https://www.qcdesignschool.com/welcome-to-the-school/"
      additionalOptions={additionalOptions}
    />
  </>
);

export default FreePortfolio;
