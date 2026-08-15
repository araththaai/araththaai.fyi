import React from 'react';

export const BrandHeader: React.FC = () => {
  return (
    <header className="site-header animate-fade-in" aria-label="Araththaai Header">
      <div className="header-brand">
        <span className="header-title">ARATHTHAAI</span>
        <span className="header-subtitle">AKM Associates & Legal Consultants</span>
      </div>
      <div className="header-services" aria-hidden="true">
        LEGAL SERVICES &bull; CONSULTANCY
      </div>
    </header>
  );
};

export default BrandHeader;
