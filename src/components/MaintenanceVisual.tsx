import React from 'react';

export const MaintenanceVisual: React.FC = () => {
  return (
    <div className="maintenance-visual-container animate-fade-in" aria-hidden="true">
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="legal-emblem-svg"
      >
        {/* Outer Circular Seal Borders */}
        <circle
          cx="80"
          cy="80"
          r="74"
          stroke="var(--accent)"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          opacity="0.7"
        />
        <circle
          cx="80"
          cy="80"
          r="68"
          stroke="var(--accent)"
          strokeWidth="0.8"
          strokeDasharray="4 3"
          opacity="0.4"
        />

        {/* Classical Column Base */}
        <path
          d="M 52 118 H 108"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 56 114 H 104"
          stroke="var(--accent)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <rect
          x="62"
          y="106"
          width="36"
          height="8"
          stroke="var(--accent)"
          strokeWidth="1"
          fill="none"
        />

        {/* Column Shaft */}
        <line
          x1="66"
          y1="56"
          x2="66"
          y2="106"
          stroke="var(--accent)"
          strokeWidth="1"
          opacity="0.85"
        />
        <line
          x1="73"
          y1="56"
          x2="73"
          y2="106"
          stroke="var(--accent)"
          strokeWidth="1"
          opacity="0.85"
        />
        <line
          x1="80"
          y1="56"
          x2="80"
          y2="106"
          stroke="var(--accent)"
          strokeWidth="1"
          opacity="0.85"
        />
        <line
          x1="87"
          y1="56"
          x2="87"
          y2="106"
          stroke="var(--accent)"
          strokeWidth="1"
          opacity="0.85"
        />
        <line
          x1="94"
          y1="56"
          x2="94"
          y2="106"
          stroke="var(--accent)"
          strokeWidth="1"
          opacity="0.85"
        />

        {/* Column Capital (Top) */}
        <path
          d="M 58 56 H 102"
          stroke="var(--accent)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 54 50 H 106"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Scales of Justice Beam */}
        <path
          d="M 36 38 H 124"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Scales Pivot Details */}
        <circle cx="80" cy="38" r="3" fill="var(--accent)" />
        <path d="M 80 38 V 49" stroke="var(--accent)" strokeWidth="1.2" />

        {/* Left Scale Pan and Chains */}
        <line x1="36" y1="38" x2="26" y2="72" stroke="var(--accent)" strokeWidth="0.8" opacity="0.8" />
        <line x1="36" y1="38" x2="46" y2="72" stroke="var(--accent)" strokeWidth="0.8" opacity="0.8" />
        <path
          d="M 22 72 C 22 82, 50 82, 50 72 Z"
          stroke="var(--accent)"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Right Scale Pan and Chains */}
        <line x1="124" y1="38" x2="114" y2="72" stroke="var(--accent)" strokeWidth="0.8" opacity="0.8" />
        <line x1="124" y1="38" x2="134" y2="72" stroke="var(--accent)" strokeWidth="0.8" opacity="0.8" />
        <path
          d="M 110 72 C 110 82, 138 82, 138 72 Z"
          stroke="var(--accent)"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Subtle Brand Centered Crest Detail (Monogram A) */}
        <path
          d="M 75 90 L 80 78 L 85 90 M 77 86 H 83"
          stroke="var(--accent)"
          strokeWidth="0.8"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};

export default MaintenanceVisual;
