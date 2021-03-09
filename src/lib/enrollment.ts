import axios, { AxiosError } from 'axios';

import { EnrollmentError } from './enrollmentError';

export type Title = 'Mrs.' | 'Miss' | 'Ms.' | 'Mr.';

export type PaymentPlan = 'full' | 'part';

export type School = 'QC Career School' | 'QC Makeup Academy' | 'QC Design School' | 'QC Event School' | 'QC Pet Studies' | 'QC Style Academy' | 'QC Travel School' | 'QC Wellness Studies' | 'Winghill Writing School';

export type EnrollmentPayload = {
  courses: string[];
  title: Title;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  provinceCode: string | null;
  postalCode: string;
  countryCode: string;
  emailAddress: string;
  telephoneNumber: string;
  paymentPlan: PaymentPlan;
  paymentDay: number;
  school: School;
  url: string;
  discountCode: string;
  campaignId: string | null;
  existingStudent: boolean;
  options?: any;
}

const baseUrl = 'https://api.qccareerschool.com/enrollments';

type AddEnrollmentResponse = { id: number; code: number };

/**
 * Adds an enrollment
 * @param {EnrollmentPayload} data the request payload
 * @throws AxiosError
 */
export const addEnrollment = async (data: EnrollmentPayload): Promise<AddEnrollmentResponse> => {
  try {
    const response = await axios.post<AddEnrollmentResponse>(baseUrl, data, {
      headers: { 'X-API-Version': 2 },
    });
    return response.data;
  } catch (err) {
    if (err.isAxiosError) {
      const axiosError = err as AxiosError;
      if (typeof axiosError.response !== 'undefined') {
        if (axiosError.response.status >= 400 && axiosError.response.status < 500) {
          throw new EnrollmentError(axiosError.response.status, axiosError.response.data.errorCode, axiosError.response.data.errors, axiosError.message);
        }
      }
    }
    throw err;
  }
};

/**
 * Updates an enrollment
 * @param {number} id the id of the enrollment to update
 * @param {EnrollmentPayload} data the request payload
 * @throws {AxiosError}
 */
export const updateEnrollment = async (id: number, data: EnrollmentPayload): Promise<void> => {
  const url = `${baseUrl}/${id}`;
  try {
    const response = await axios.put(url, data, {
      headers: { 'X-API-Version': 2 },
    });
    return response.data;
  } catch (err) {
    if (err.isAxiosError) {
      const axiosError = err as AxiosError;
      if (typeof axiosError.response !== 'undefined') {
        if (axiosError.response.status >= 400 && axiosError.response.status < 500) {
          if (axiosError.response.data.errors) {
            throw new EnrollmentError(axiosError.response.status, axiosError.response.data.errorCode, axiosError.response.data.errors, axiosError.message);
          }
        }
      }
    }
    throw err;
  }
};

/**
 * Charges an enrollment
 * @param {number} id the id of the enrollment to charge
 * @param {string} token the single-use token returned from paysafe
 * @param {'CA' | 'US' | 'GB' } company the paysafe company to use
 * @throws {AxiosError}
 * @throws {Error}
 */
export const chargeEnrollment = async (id: number, token: string, company: 'CA' | 'US' | 'GB'): Promise<number> => {
  const url = `${baseUrl}/${id}/profiles`;
  try {
    const response = await axios.post(url, { token, company }, {
      headers: { 'X-API-Version': 2 },
    });
    return response.data;
  } catch (err) {
    if (err.isAxiosError) {
      const axiosError = err as AxiosError;
      if (typeof axiosError.response !== 'undefined') {
        const code = axiosError.response.data.code;
        if (typeof code !== 'undefined') {
          if ([ 3009, 3014, 3023, 3024 ].indexOf(code) !== -1) {
            throw Error('Declined by bank');
          } else if (code === 3022) {
            throw Error('NSF');
          } else if (code === 3016) {
            throw Error('Hold card');
          } else if (code === 3007) {
            throw Error('AVS check failed');
          }
        }
      }
    }
    throw err;
  }
};
