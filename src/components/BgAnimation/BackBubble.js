import React from 'react';

const BackBubble = () => (
  <div>

<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="black"
    d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />

  <circle r="10" fill="#ff00d4">
    <animateMotion dur="10s" repeatCount="indefinite"
      path="M210,50 C20,-50 180,150 180,50 C180-50 50,150 20,50 z" />
  </circle>
  <circle r="10" fill="#f46737">
    <animateMotion dur="10s" repeatCount="indefinite"
      path="M120,50 C120,-50 180,150 180,50 C180-50 90,150 20,50 z" />
  </circle>
  <circle r="10" fill="#8321bf">
    <animateMotion dur="10s" repeatCount="indefinite"
      path="M45,50 C40,-50 180,150 180,50 C180-50 20,150 20,50 z" />
  </circle>
 
</svg>
</div>
  
  );

  export default BackBubble;
  