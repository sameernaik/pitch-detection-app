import React from 'react';

export function About() {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h2>Dhrupad Gurukul</h2>
      <img 
        src={process.env.PUBLIC_URL + '/DhrupadGurukul.png'} 
        alt="Dhrupad Gurukul" 
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}
