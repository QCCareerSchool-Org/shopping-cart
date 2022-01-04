import { gbpCountry, telephoneNumber } from '@qccareerschool/helper-functions';
import React from 'react';

type Props = {
  countryCode: string;
};

export const Footer: React.FC<Props> = ({ countryCode }) => {
  const tel = telephoneNumber(countryCode);
  const termsLink = gbpCountry(countryCode) ? 'https://www.qcpetstudies.com/terms-gb' : 'https://www.qcpetstudies.com/terms';

  return (
    <footer id="footer">
      <div className="container text-center text-md-left">
        <span className="footer-item small">&copy; {new Date().getFullYear()} QC Pet Studies</span>
        <span className="footer-item small"><a target="_blank" rel="noopener noreferrer" href={termsLink}>Privacy Policy</a></span>
        <span className="footer-item small"><a href={`tel:${tel}`}>{tel}</a></span>
        <span className="footer-item small"><a target="_blank" rel="noopener noreferrer" href="https://www.bbb.org/ca/on/ottawa/profile/correspondence-schools/qc-career-school-0117-4175">BBB Accredited A+</a></span>
      </div>
    </footer>
  );
};
