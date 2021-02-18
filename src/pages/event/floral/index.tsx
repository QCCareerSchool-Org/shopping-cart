import React from 'react';

import { Form } from '../../../components/Form';
import { CourseGroup } from '../../../state/courses';
import { Guarantee } from '../Guarantee';
import { FloralPromo } from './FloralPromo';

type Props = {
  currencyCode: string;
}

const additionalOptions = {
  discount: {
    default: 100,
    GBP: 75,
  },
  discountSignature: 'ZEWLbuphTH4oLBZyyu4/iuASSVgRnykmXjeZOMNbgOl75TYgW9YaO7NyaYkqfcHYVFv2kTAwxZ+PPUxxx2tnsq+LysBHqhSoslgY+JVDO5ETDymqhcMo9IIuwTGlZ8Cwxu2BScM3RBMQ1f30jXYis1wwXmcaYv5urpM9jQ794gVLlBIsrDYoHDe3BO0IUaOk1a2JtMyLntprcde1rXf9GkDsUujWqTuSDyKKNqwiqnRksGNu3LWA9swEdL8mP6SoPKJyv8NkWHZVsseWRzqS/W9rYS6FiJx6+PiiL61pU2Zj1Ai1l5NkrEvxaKBOjkYmWG1gOjgMsf3DcciXmPTdhQ==',
};

const courseGroups: CourseGroup[] = [
  {
    items: [
      { code: 'FD', name: 'Floral Design' },
    ],
  },
];

const Floral: React.FC<Props> = ({ currencyCode }) => (
  <>
    <FloralPromo currencyCode={currencyCode} />
    <Form
      courseGroups={courseGroups}
      school="QC Event School"
      courseOverride={[ 'FD' ]}
      guarantee={() => <Guarantee />}
      shippingOption={true}
      agreementLink="https://www.qceventplanning.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qceventplanning.com/enrollment-agreement-gb.html"
      successLink="https://www.qceventplanning.com/welcome-to-the-school/"
      additionalOptions={additionalOptions}
    />
  </>
);

export default Floral;
