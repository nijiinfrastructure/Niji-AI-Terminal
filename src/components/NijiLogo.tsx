import React from 'react';

export function NijiLogo({ className = '' }: { className?: string }) {
  return (
    <img 
      src="https://raw.githubusercontent.com/nijiinfrastructure/nijiAI/main/logo.png"
      alt="nijiAI Logo"
      className={className}
    />
  );
}