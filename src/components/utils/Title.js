import React from 'react';
import './Title.css';

export default function Title({
  subheading = 'This is subheading',
  heading = 'This is heading',
}) {
  return (
    <div className="title">
      <p className="p">{subheading}</p>
      <h2 className="h2">{heading}</h2>
    </div>
  );
}
