/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';

import { BuyOneGetOne } from '../../../components/BuyOneGetOne';
import { Form } from '../../../components/Form';
import { Course, CourseGroup } from '../../../state/courses';
import { courseGroups } from '../courseGroups';
import { Guarantee } from '../Guarantee';
import { OrganizingPromo } from './OrganizingPromo';

const additionalOptions = {
  discount: {
    default: 100,
    GBP: 75,
  },
  discountSignature: 'ZEWLbuphTH4oLBZyyu4/iuASSVgRnykmXjeZOMNbgOl75TYgW9YaO7NyaYkqfcHYVFv2kTAwxZ+PPUxxx2tnsq+LysBHqhSoslgY+JVDO5ETDymqhcMo9IIuwTGlZ8Cwxu2BScM3RBMQ1f30jXYis1wwXmcaYv5urpM9jQ794gVLlBIsrDYoHDe3BO0IUaOk1a2JtMyLntprcde1rXf9GkDsUujWqTuSDyKKNqwiqnRksGNu3LWA9swEdL8mP6SoPKJyv8NkWHZVsseWRzqS/W9rYS6FiJx6+PiiL61pU2Zj1Ai1l5NkrEvxaKBOjkYmWG1gOjgMsf3DcciXmPTdhQ==',
};

/**
 * Creates a modified version of an array of CourseGroups where the PO course is moved to the first item of the first group
 * @param defaultCourseGroups the original CourseGroups
 * @returns the modified CourseGroups
 */
export const getModifiedCourseGroups = (defaultCourseGroups: CourseGroup[]): CourseGroup[] => {
  // make a copy of the default course groups, where the PO course is filtered out of the items of each of them
  const modifiedCourseGroups: CourseGroup[] = defaultCourseGroups.map(c => ({ ...c, items: c.items.filter(i => i.code !== 'PO') }));

  // find the PO course from the default course groups
  const isPOCourse = (i: Course): boolean => i.code === 'PO';
  const PO = defaultCourseGroups.find(c => c.items.find(isPOCourse))?.items.find(isPOCourse);
  if (!PO) {
    throw Error('can\'t find PO course');
  }

  // re-add the PO course to the first group of our modified course groups
  if (modifiedCourseGroups.length) {
    modifiedCourseGroups[0].items.unshift(PO);
  }

  return modifiedCourseGroups;
};

const modifiedCourseGroups = getModifiedCourseGroups(courseGroups);

const Organizing = (): ReactElement => (
  <>
    <OrganizingPromo />
    <Form
      courseGroups={modifiedCourseGroups}
      school="QC Design School"
      guarantee={() => <Guarantee />}
      coursesSubtitle={() => <BuyOneGetOne />}
      agreementLink="https://www.qcdesignschool.com/enrollment-agreement.html"
      agreementLinkGB="https://www.qcdesignschool.com/enrollment-agreement-gb.html"
      successLink="https://www.qcdesignschool.com/welcome-to-the-school/"
      additionalOptions={additionalOptions}
    />
  </>
);

export default Organizing;
