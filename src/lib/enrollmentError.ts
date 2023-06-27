export interface EnrollmentErrors {
  courses?: 'missing' | 'empty' | 'invalid';
  studentAddress: {
    title?: 'missing' | 'empty' | 'invalid';
    firstName?: 'missing' | 'empty' | 'invalid';
    lastName?: 'missing' | 'empty' | 'invalid';
    address1?: 'missing' | 'empty' | 'invalid';
    address2?: 'missing' | 'invalid';
    city?: 'missing' | 'empty' | 'invalid';
    countryCode?: 'missing' | 'empty' | 'invalid';
    provinceCode?: 'missing' | 'empty' | 'invalid';
    postalCode?: 'missing' | 'empty' | 'invalid';
    telephoneNumber?: 'missing' | 'empty';
    emailAddress?: 'missing' | 'empty' | 'invalid';
  };
  billingAddress: {
    title?: 'missing' | 'empty' | 'invalid';
    firstName?: 'missing' | 'empty' | 'invalid';
    lastName?: 'missing' | 'empty' | 'invalid';
    address1?: 'missing' | 'empty' | 'invalid';
    address2?: 'missing' | 'invalid';
    city?: 'missing' | 'empty' | 'invalid';
    countryCode?: 'missing' | 'empty' | 'invalid';
    provinceCode?: 'missing' | 'empty' | 'invalid';
    postalCode?: 'missing' | 'empty' | 'invalid';
    telephoneNumber?: 'missing' | 'empty';
    emailAddress?: 'missing' | 'empty' | 'invalid';
  };
  paymentPlan?: 'missing' | 'empty' | 'invalid';
  paymentDay?: 'missing' | 'empty' | 'invalid';
}

export class EnrollmentError extends Error {
  public constructor(public statusCode: number, public code: number, public enrollmentErrors: EnrollmentErrors, message?: string) {
    super(message);
    this.name = this.constructor.name;
    if (Error.captureStackTrace) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Error.captureStackTrace(this, (this as any).contructor);
    }
  }
}
