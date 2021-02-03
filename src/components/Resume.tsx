import axios from 'axios';
import React, { useEffect } from 'react';
import qs from 'qs';

/**
 * Looks up a past enrollment in the back end, fills sessionStorage with the data, and redirects back to the original cart
 */
export const Resume: React.FC = () => {
  useEffect(() => {
    const querystring = qs.parse(window.location.search.slice(1));
    if (typeof querystring.code !== 'string') {
      window.location.replace('/');
      return;
    }

    axios.get(`https://api.qccareerschool.com/enrollments/${querystring.id}`, {
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
        courses: response.data.courses.map((c: any) => c.code),
      }));
      window.location.replace(response.data.url);
    }).catch(() => {
      window.location.replace('/');
    });
  }, []);

  return <></>;
};
