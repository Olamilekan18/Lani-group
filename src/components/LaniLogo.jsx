import React from 'react';

const LaniLogo = ({ className = '', white = false, size = 'md' }) => {
  const sizes = {
    sm: { width: 120, height: 40 },
    md: { width: 160, height: 52 },
    lg: { width: 220, height: 72 },
    xl: { width: 300, height: 98 },
  };

  const { width, height } = sizes[size] || sizes.md;
  const fillColor = white ? '#FFFFFF' : '#2E2D70';

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 300 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hourglass / Trophy Icon */}
      <g transform="translate(30, 4)">
        {/* Top circle (head) */}
        <circle cx="40" cy="10" r="7" fill={fillColor} />
        
        {/* Top horizontal bar */}
        <rect x="18" y="20" width="44" height="3" rx="1.5" fill={fillColor} />
        
        {/* Upper triangle (hourglass top) */}
        <path
          d="M22 23 L40 45 L58 23"
          fill="none"
          stroke={fillColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Lower triangle (hourglass bottom) */}
        <path
          d="M24 67 L40 45 L56 67"
          fill="none"
          stroke={fillColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Bottom horizontal bar */}
        <rect x="16" y="67" width="48" height="3" rx="1.5" fill={fillColor} />
        
        {/* Base/pedestal */}
        <rect x="22" y="73" width="36" height="3" rx="1.5" fill={fillColor} />
        
        {/* Small decorative elements on sides of hourglass */}
        <circle cx="23" cy="44" r="2.5" fill={fillColor} opacity="0.6" />
        <circle cx="57" cy="44" r="2.5" fill={fillColor} opacity="0.6" />
      </g>

      {/* LANI text */}
      <g transform="translate(115, 16)">
        <text
          x="0"
          y="32"
          fill={fillColor}
          fontFamily="'Inter', 'Arial', sans-serif"
          fontWeight="800"
          fontSize="36"
          letterSpacing="4"
        >
          LANI
        </text>
        {/* GROUP text */}
        <text
          x="0"
          y="64"
          fill={fillColor}
          fontFamily="'Inter', 'Arial', sans-serif"
          fontWeight="700"
          fontSize="32"
          letterSpacing="6"
        >
          GROUP
        </text>
      </g>
    </svg>
  );
};

export default LaniLogo;
