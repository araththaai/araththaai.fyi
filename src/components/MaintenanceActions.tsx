import React, { useState } from 'react';

export const MaintenanceActions: React.FC = () => {
  const [isNavigating, setIsNavigating] = useState(false);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleBack = () => {
    setIsNavigating(true);
    // Safe browser back navigation
    if (window.history.length > 1 && document.referrer) {
      window.history.back();
      
      // Fallback if history.back did not trigger navigation (e.g. browser blocked it or page did not change)
      const timeout = setTimeout(() => {
        window.location.href = '/';
      }, 350);
      
      return () => clearTimeout(timeout);
    } else {
      // Direct fallback to home if no history exists
      window.location.href = '/';
    }
  };

  return (
    <div className="maintenance-actions animate-fade-in" aria-label="Maintenance Actions">
      <button
        onClick={handleRefresh}
        className="btn btn-primary"
        title="Reload the page to check current status"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="btn-icon"
          aria-hidden="true"
        >
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.73-2.73" />
        </svg>
        Refresh Page
      </button>

      <button
        onClick={handleBack}
        className="btn btn-secondary"
        disabled={isNavigating}
        title="Go back to the previous page"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="btn-icon"
          aria-hidden="true"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        {isNavigating ? 'Navigating...' : 'Return to Previous Page'}
      </button>
    </div>
  );
};

export default MaintenanceActions;
