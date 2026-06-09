import React from 'react';

const LaniLogo = ({ className = '', white = false, size = 'md' }) => {
  const sizes = {
    sm: { height: 40 },
    md: { height: 52 },
    lg: { height: 72 },
    xl: { height: 98 },
  };

  const { height } = sizes[size] || sizes.md;

  return (
    <img
      src="/images/lanigroup-logo.png"
      alt="LANI Group Logo"
      style={{ height: `${height}px`, width: 'auto' }}
      className={`object-contain ${white ? 'brightness-0 invert' : ''} ${className}`}
    />
  );
};

export default LaniLogo;
