import React from 'react';

export function DiscordIcon({ className = '' }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 800 619.28" 
      className={className}
      style={{ fill: 'currentColor' }}
    >
      <path d="m677.68,51.86c-51.79-24.23-107.16-41.84-165.05-51.86-7.11,12.85-15.42,30.14-21.14,43.9-61.54-9.25-122.51-9.25-182.92,0-5.73-13.75-14.22-31.04-21.39-43.9-57.95,10.03-113.39,27.7-165.17,51.99C17.55,209.83-10.76,363.75,3.4,515.49c69.28,51.73,136.42,83.16,202.42,103.73,16.3-22.43,30.83-46.27,43.35-71.4-23.85-9.06-46.69-20.24-68.27-33.23,5.73-4.24,11.33-8.68,16.74-13.24,131.63,61.57,274.66,61.57,404.72,0,5.47,4.56,11.07,9,16.74,13.24-21.65,13.05-44.55,24.23-68.4,33.29,12.52,25.06,26.99,48.97,43.35,71.4,66.07-20.57,133.27-51.99,202.55-103.79,16.61-175.9-28.38-328.4-118.92-463.62Zm-410.57,370.31c-39.52,0-71.92-36.89-71.92-81.81s31.71-81.88,71.92-81.88,72.61,36.89,71.92,81.88c.06,44.92-31.71,81.81-71.92,81.81Zm265.79,0c-39.52,0-71.92-36.89-71.92-81.81s31.71-81.88,71.92-81.88,72.61,36.89,71.92,81.88c0,44.92-31.71,81.81-71.92,81.81Z" />
    </svg>
  );
}