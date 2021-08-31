import React from 'react';
import './TextLanding.css';

export default function TextLanding({ children }) {
  return (
    <div className="text">
      <p>{children}</p>
    </div>
  );
}
