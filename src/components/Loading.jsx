import React from 'react';
import { Atom } from 'react-loading-indicators'; 

export default function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Atom color="#1a441a" size="medium" text="" textColor="" />
    </div>
  );
}
