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
      },
      {
        code: 'MS',
        name: 'Staging for Designers',
        disabledMessage: (
          <p><span className="text-primary">Staging for Designers</span> is an add-on to <span className="text-primary">Interior Decorating</span>. To enroll in <span className="text-primary">Staging for Designers</span>, please select <span className="text-primary">Interior Decorating</span> first.</p>
        ),
      },
      {
        code: 'ST',
        name: 'Home Staging',
        disabledMessage: (
          <p>
            The <span className="text-primary">Interior Decorating</span> and <span className="text-primary">Home Staging</span>{' '}
            courses have course materials in common. If you would like training in both subjects, select <span className="text-primary">Staging For Designers</span> instead.
          </p>
        ),
      },
      { code: 'LD', name: 'Landscape Design' },
      { code: 'PO', name: 'Professional Organizing' },
      { code: 'FS', name: 'Feng Shui' },
      { code: 'CC', name: 'Color Consultant Course' },
      { code: 'FD', name: 'Floral Design' },
      { code: 'ED', name: 'Event Decor' },
      { code: 'AP', name: 'Aging in Place' },
      { code: 'DB', name: 'Accelerate Your Design Business' },
      { code: 'VD', name: 'Virtual Design Training' },
    ],
  },
];
