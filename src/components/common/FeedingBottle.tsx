import React from 'react';

interface FeedingBottleProps {
  size?: number;
  color?: string;
  className?: string;
}

const FeedingBottle: React.FC<FeedingBottleProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = ''
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Nipple */}
      <path d="M12 2C10.5 2 10 3.5 10 5V7H14V5C14 3.5 13.5 2 12 2Z" />
      {/* Cap ring */}
      <rect x="8" y="7" width="8" height="3" rx="1" />
      {/* Bottle Body */}
      <path d="M8.5 10V18C8.5 20.2091 10.2909 22 12.5 22C14.7091 22 16.5 20.2091 16.5 18V10" />
      {/* Measurement lines */}
      <line x1="14.5" y1="13" x2="16.5" y2="13" />
      <line x1="14.5" y1="16" x2="16.5" y2="16" />
      <line x1="14.5" y1="19" x2="16.5" y2="19" />
    </svg>
  );
};

export default FeedingBottle;
