export const isMakeup = (domain: string) => [ 'makeup.localhost', 'enroll.qcmakeupacademy.com', 'makeup.enrolltest.qccareerschool.com' ].includes(domain);
export const isDesign = (domain: string) => [ 'design.localhost', 'enroll.qcdesignschool.com', 'design.enrolltest.qccareerschool.com' ].includes(domain);
export const isEvent = (domain: string) => [ 'event.localhost', 'enroll.qceventplanning.com', 'event.enrolltest.qccareerschool.com' ].includes(domain);
export const isPet = (domain: string) => [ 'pet.localhost', 'enroll.doggroomingcourse.com', 'pet.enrolltest.qccareerschool.com' ].includes(domain);
export const isWellness = (domain: string) => [ 'wellness.localhost', 'enroll.qcwellnessstudies.com', 'wellness.enrolltest.qccareerschool.com' ].includes(domain);
export const isWriting = (domain: string) => [ 'writing.localhost', 'enroll.winghill.com', 'writing.enrolltest.qccareerschool.com' ].includes(domain);
export const isInternal = (domain: string) => [ 'internal.localhost', 'secure.qccareerschool.com', 'internal.enrolltest.qccareerschool.com' ].includes(domain);
