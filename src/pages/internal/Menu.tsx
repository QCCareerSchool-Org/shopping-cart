import React from 'react';
import { Link } from 'react-router-dom';

export const Menu: React.FC = () => (
  <section>
    <div className="container">
      <h1>Online Enrollment</h1>
      <p>Please select a school:</p>
      <ul>
        <li><Link to="/enroll2/makeup">QC Makeup Academy</Link></li>
        <li><Link to="/enroll2/event">QC Event School</Link></li>
        <li><Link to="/enroll2/design">QC Design School</Link></li>
        <li><Link to="/enroll2/pet">QC Pet Studies</Link></li>
        <li><Link to="/enroll2/wellness">QC Wellness Studies</Link></li>
        <li><Link to="/enroll2/writing">Winghill</Link></li>
      </ul>
    </div>
  </section>
);
