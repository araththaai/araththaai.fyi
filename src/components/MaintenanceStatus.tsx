import React from 'react';

interface MaintenanceStatusProps {
  headline?: string;
  description?: string;
  statusLabel?: string;
  statusText?: string;
}

export const MaintenanceStatus: React.FC<MaintenanceStatusProps> = ({
  headline = "We'll Be Back Shortly.",
  description = "Our digital chambers are temporarily closed for maintenance. We appreciate your patience while we make important improvements to the Araththaai experience.",
  statusLabel = "CURRENT STATUS",
  statusText = "Maintenance in Progress",
}) => {
  return (
    <div className="maintenance-status-container animate-fade-in">
      {/* Category / Status Label */}
      <span className="status-badge" role="status">
        TEMPORARILY UNAVAILABLE
      </span>

      {/* Main Headline */}
      <h1 className="heading-serif maintenance-headline">
        {headline}
      </h1>

      {/* Description */}
      <p className="maintenance-description">
        {description}
      </p>

      {/* Status Track Card */}
      <div className="status-card" aria-live="polite" aria-busy="true">
        <span className="status-card-label">{statusLabel}</span>
        <div className="status-card-value">
          <span className="status-pulse" aria-hidden="true" />
          <span>{statusText}</span>
        </div>
        
        {/* Understated indeterminate progress bar */}
        <div className="progress-line-container" aria-hidden="true">
          <div className="progress-line-indicator" />
        </div>
      </div>
    </div>
  );
};

export default MaintenanceStatus;
