import React from 'react';
import MaintenanceVisual from '../components/MaintenanceVisual';
import MaintenanceStatus from '../components/MaintenanceStatus';
import MaintenanceActions from '../components/MaintenanceActions';

export const MaintenancePage: React.FC = () => {
  return (
    <div className="maintenance-page-wrapper">
      <main className="maintenance-main-content">
        <article className="maintenance-article-layout">
          {/* Brand Typography treatment inside the Hero */}
          <div className="hero-brand animate-fade-in">
            <span className="brand-title">ARATHTHAAI</span>
            <span className="brand-subtitle">AKM Associates & Legal Consultants</span>
          </div>

          {/* Visual SVG Seal */}
          <MaintenanceVisual />

          {/* Core Maintenance Typography & Status */}
          <MaintenanceStatus />

          {/* Interactive buttons */}
          <MaintenanceActions />
        </article>
      </main>
    </div>
  );
};

export default MaintenancePage;
