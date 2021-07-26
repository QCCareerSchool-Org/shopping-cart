import React from 'react';
import { CourseGroup } from '../../state/courses';

export const courseGroups: CourseGroup[] = [
  {
    items: [
      {
        code: 'DG',
        name: 'Dog Grooming (includes Breed Styling)',
        // disabledMessage: (
        //   <>
        //     <p>The <span className="text-primary">Dog Grooming</span> course includes all the materials from the <span className="text-primary">Breed Styling</span> course.</p>
        //     <p>If you would like to enroll in <span className="text-primary">Dog Grooming</span>, first <em>deselect</em> <span className="text-primary">Breed Styling</span>.</p>
        //   </>
        // ),
      },
      {
        code: 'FA',
        name: 'First Aid For Groomers',
        // disabledMessage: (
        //   <p>The <span className="text-primary">Breed Styling</span> course includes all the materials from the <span className="text-primary">First Aid For Groomers</span> course.</p>
        // ),
      },
      {
        code: 'DS',
        name: 'Breed Styling & First Aid',
        // disabledMessage: (
        //   <>
        //     <p>
        //       The <span className="text-primary">Dog Grooming</span> course includes all the materials from the{' '}
        //       <span className="text-primary">Breed Styling</span> course and the <span className="text-primary">Breed Styling</span>{' '}
        //       course includes all the materials from the <span className="text-primary">First Aid For Groomers</span> course.
        //     </p>
        //     <p>
        //       If you would like to take <span className="text-primary">Breed Styling</span>, make sure both{' '}
        //       the <span className="text-primary">Dog Grooming</span> and <span className="text-primary">First Aid For Groomers</span>{' '}
        //       courses are deselected.
        //     </p>
        //   </>
        // ),
      },
    ],
  },
];
