import React from 'react';

import { useDate } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { DefaultPromo } from '../default/DefaultPromo';

type Props = {
  currencyCode: string;
  courses: string[];
}

const additionalOptions = {
  discount: {
    default: 100,
  },
  discountSignature: 'LKTNPGVwJkHceRBl87wnV1vUPqHAr8qAytj8TB5Bm/1BarnbhY26SDmCYIt6Kdkevcf7o3GR9lgLOXkGwuee9Y9c0MUA96lsQmALrj0h2QimxDTjI1Lx8zJScN1Rm8asg8CjOagOb1y6dSWyY2p6Ql2PvF/BSYrVA9IRi/nE2QPGqHIbqSlBCPhCDu+rJBSKHRBkCWO4ivNictHKDcuVl42PChTlQd/TYwyPfHONrxwCdF1CX9UZZ6yjJH+Aj1F19It3FprN4FISxmzrijTDVMCJcwLAmxf4fPAEc1wuJLo2yLat9xKLgfw85sFj8qha9J4h9nnUCizQ23NbSX2vdQ==',
};

const PromoTest: React.FC<Props> = ({ currencyCode, courses }) => {
  const serverDate = useDate();
  const date = dateOverride() || serverDate;

  return (
    <>
      <DefaultPromo date={date} currencyCode={currencyCode} />
      <Form
        courseGroups={courseGroups}
        school="QC Makeup Academy"
        guarantee={() => <Guarantee />}
        agreementLink="https://www.qcmakeupacademy.com/enrollment-agreement.html"
        agreementLinkGB="https://www.qcmakeupacademy.com/enrollment-agreement-gb.html"
        successLink="https://www.qcmakeupacademy.com/welcome-to-the-school/"
        additionalOptions={additionalOptions}
        promoCode={true}
        shippingOption={true}
      />
    </>
  );
};

export default PromoTest;
