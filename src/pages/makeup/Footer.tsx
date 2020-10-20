import * as Helpers from '@qccareerschool/helper-functions';
import React from 'react';

import { useStateContext } from '../../hooks/useStateContext';

export const Footer: React.FC = () => {
  const { address: { countryCode }, price } = useStateContext();
  const telephoneNumber = Helpers.telephoneNumber(countryCode);

  const termsLink = price?.currency.code === 'GBP' ? 'https://www.qcmakeupacademy.com/terms-gb.html' : 'https://www.qcmakeupacademy.com/terms.html';

  return (
    <footer id="footer">
      <div className="container text-center text-md-left">
        <span className="footer-item small">&copy; {new Date().getFullYear()} QC Makeup Academy</span>
        <span className="footer-item small"><a target="_blank" rel="noopener noreferrer" href={termsLink}>Privacy Policy</a></span>
        <span className="footer-item small"><a href={`tel:${telephoneNumber}`}>{telephoneNumber}</a></span>
        <span className="footer-item small"><a target="_blank" rel="noopener noreferrer" href="https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175">BBB Accredited A+</a></span>
      </div>
    </footer>
  );
};
