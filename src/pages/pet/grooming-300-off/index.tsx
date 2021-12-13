import React, { ReactElement } from 'react';

import { Form } from '../../../components/Form';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { Promo } from './promo';

const additionalOptions = {
  discount: {
    default: 300,
  },
  discountSignature: 'bFBGhX3U0XVjdR4Io4YeTr46XZLxRltXzLjQd1xg/gEKBswhTDo0H7lJVr+Qj/wcW2wTPR40mvgAYU3u45f2o7F9B38bKQNsM+JoG7ylVr4/gZvXyjXN+5+UF7b9AaYeilUs480jCd3+7vBObiwAFZgvkcd6S57gf5qvf56YGkAF10qvvcBKzZ9utwsZZR6jUh9ZS8nSciEWU/DefVkRfjpXEFbMkUk0gQM29Ekqzsyv4sBWqxK/1nt+N4PDx+wKLTf3E3pnjjs6E15iiqo88SWA5XmfC+41Zwf/7iCuXezWYqx9jjIJn4f2FM+ooGxU9JqMDe5aS4RsgLCHDcHtJA==',
};

const Grooming300Off = (): ReactElement => (
  <>
    <Promo />
    <Form
      courseGroups={courseGroups}
      school="QC Pet Studies"
      guarantee={() => <Guarantee />}
      agreementLink="https://www.doggroomingcourse.com/enrollment-agreement.html"
      agreementLinkGB="https://www.doggroomingcourse.com/enrollment-agreement-gb.html"
      successLink="https://www.doggroomingcourse.com/welcome-to-the-school/"
      additionalOptions={additionalOptions}
    />
  </>
);

export default Grooming300Off;
