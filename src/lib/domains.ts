export const isMakeup = (domain: string): boolean => [ 'makeup.localhost', 'enroll.qcmakeupacademy.com', 'makeup.enrolltest.qccareerschool.com' ].includes(domain);
export const isDesign = (domain: string): boolean => [ 'design.localhost', 'enroll.qcdesignschool.com', 'design.enrolltest.qccareerschool.com' ].includes(domain);
export const isEvent = (domain: string): boolean => [ 'event.localhost', 'enroll.qceventplanning.com', 'event.enrolltest.qccareerschool.com' ].includes(domain);
export const isPet = (domain: string): boolean => [ 'pet.localhost', 'enroll.doggroomingcourse.com', 'pet.enrolltest.qccareerschool.com' ].includes(domain);
export const isWellness = (domain: string): boolean => [ 'wellness.localhost', 'enroll.qcwellnessstudies.com', 'wellness.enrolltest.qccareerschool.com' ].includes(domain);
export const isWriting = (domain: string): boolean => [ 'writing.localhost', 'enroll.winghill.com', 'writing.enrolltest.qccareerschool.com' ].includes(domain);
export const isInternal = (domain: string): boolean => [ 'internal.localhost', 'secure.qccareerschool.com', 'internal.enrolltest.qccareerschool.com' ].includes(domain);
