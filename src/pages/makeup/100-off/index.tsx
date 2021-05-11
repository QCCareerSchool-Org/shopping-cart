import React from 'react';
import { Form } from '../../../components/Form';

import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { HundredOffPromo } from './HundredOffPromo';

type Props = {
  currencyCode: string;
};

const additionalOptions = {
  discount: {
    default: 100,
  },
  discountSignature: 'LKTNPGVwJkHceRBl87wnV1vUPqHAr8qAytj8TB5Bm/1BarnbhY26SDmCYIt6Kdkevcf7o3GR9lgLOXkGwuee9Y9c0MUA96lsQmALrj0h2QimxDTjI1Lx8zJScN1Rm8asg8CjOagOb1y6dSWyY2p6Ql2PvF/BSYrVA9IRi/nE2QPGqHIbqSlBCPhCDu+rJBSKHRBkCWO4ivNictHKDcuVl42PChTlQd/TYwyPfHONrxwCdF1CX9UZZ6yjJH+Aj1F19It3FprN4FISxmzrijTDVMCJcwLAmxf4fPAEc1wuJLo2yLat9xKLgfw85sFj8qha9J4h9nnUCizQ23NbSX2vdQ==',
};

const HundredOff: React.FC<Props> = ({ currencyCode }) => (
  <>
    <HundredOffPromo currencyCode={currencyCode} />
    <Form
      courseGroups={courseGroups}
      school="QC Makeup Academy"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
      successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
      additionalOptions={additionalOptions}
    />
  </>
);

export default HundredOff;
