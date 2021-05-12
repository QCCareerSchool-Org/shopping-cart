import React from 'react';

export const Header: React.FC = () => (
  <header className="flex-shrink-0">
    <div className="container">
      <a href="/"><img id="header-logo" src={require('./logo.png').default} alt="QC Career School" /></a>
    </div>
  </header>
);
