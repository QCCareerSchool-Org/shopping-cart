import React from 'react';

import { CourseGroup } from '../../state/courses';

export const courseGroups: CourseGroup[] = [
  {
    name: 'Foundation Courses',
    items: [
      { code: 'EP', name: 'Event & Wedding Planning' },
      { code: 'CP', name: 'Corporate Event Planning' },
      { code: 'CE', name: 'Event Planning' },
      { code: 'WP', name: 'Wedding Planning' },
      { code: 'FD', name: 'Floral Design ' },
    ],
  },
  {
    name: 'Specialty Courses',
    items: [
      { code: 'ED', name: 'Event Decor' },
      { code: 'EB', name: 'Accelerate Your Business Workshop' },
      { code: 'LW', name: 'Luxury Wedding & Event Planning' },
      { code: 'DW', name: 'Destination Wedding Planning' },
      {
        code: 'FL', name: 'Festivals & Live Events', disabledMessage: (
          <p>
            The <span className="text-primary">Festivals &amp; Live Events</span> course requires corporate event
            training. Please select the <span className="text-primary">Corporate Event Planning</span> course first.
          </p>
        ),
      },
      {
        code: 'PE', name: 'Promotional Event Planning', disabledMessage: (
          <p>
            The <span className="text-primary">Promotional Event Planning</span> course requires corporate event
            training. Please select the <span className="text-primary">Corporate Event Planning</span> course first.
          </p>
        ),
      },
      { code: 'TT', name: 'Travel & Tourism' },
      { code: 'VE', name: 'Virtual Event Training' },
    ],
  },
];
