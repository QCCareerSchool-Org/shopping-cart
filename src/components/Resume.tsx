import axios from 'axios';
import qs from 'qs';
import React, { ReactElement, useEffect } from 'react';

/**
 * Looks up a past enrollment in the back end, fills sessionStorage with the data, and redirects back to the original cart
 */
const Resume = (): ReactElement => {
  useEffect(() => {
    const querystring = qs.parse(window.location.search.slice(1));
    if (typeof querystring.code !== 'string') {
      window.location.replace('/');
      return;
    }

    axios.get(`${process.env.REACT_APP_ENROLLMENT_ENDPOINT}/${querystring.id}`, {
      params: { code: querystring.code },
    }).then(response => {
      window.sessionStorage.setItem('form', JSON.stringify({
        title: response.data.title,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        emailAddress: response.data.emailAddress,
        telephoneNumber: response.data.telephoneNumber,
        countryCode: response.data.countryCode,
        address1: response.data.address1,
        address2: response.data.address2,
        city: response.data.city,
        provinceCode: response.data.provinceCode,
        postalCode: response.data.postalCode,
        courses: response.data.courses.map((c: { code: string }) => c.code),
      }));
      window.location.replace(response.data.url);
    }).catch(() => {
      window.location.replace('/');
    });
  }, []);

  return <></>;
};

export default Resume;
