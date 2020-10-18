import React from 'react';

import { CourseGroup } from '../../state/courses';

export const courseGroups: CourseGroup[] = [
  {
    items: [
      {
        code: 'I2',
        name: 'Interior Decorating',
        disabledMessage: (
          <p>
            The <span className="text-primary">Interior Decorating</span> and <span className="text-primary">Home Staging</span>{' '}
            courses have course materials in common. If you would like training in both subjects, first <em>deselect</em>{' '}
            Home Staging, then select both <span className="text-primary">Interior Decorating</span> and <span className="text-primary">Staging For Designers</span>.
          </p>
        ),
        selected: false,
        disabled: false,
        hidden: false,
      },
      { code: 'MS', name: 'Staging For Designers', selected: false, disabled: false, hidden: false },
      {
        code: 'ST',
        name: 'Home Staging',
        disabledMessage: (
          <p>
            The <span className="text-primary">Interior Decorating</span> and <span className="text-primary">Home Staging</span>{' '}
            courses have course materials in common. If you would like training in both subjects, select <span className="text-primary">Staging For Designers</span> instead.
          </p>
        ),
        selected: false,
        disabled: false,
        hidden: false,
      },
      { code: 'PO', name: 'Professional Organizing', selected: false, disabled: false, hidden: false },
      { code: 'FS', name: 'Feng Shui', selected: false, disabled: false, hidden: false },
      { code: 'CC', name: 'Color Consultant Course', selected: false, disabled: false, hidden: false },
      { code: 'AP', name: 'Aging in Place', selected: false, disabled: false, hidden: false },
      { code: 'DB', name: 'Accelerate Your Design Business', selected: false, disabled: false, hidden: false },
      { code: 'VD', name: 'Virtual Design Training', selected: false, disabled: false, hidden: false },
    ],
  },
];
