import React from 'react';
import LandingPhoto from '../../assets/images/LandingPhoto.png';

export default function About() {
  return (
    <div>
      <div className="container">
        <h1 className="heading">
          <span>Hello, This is</span>
          <span>Sibyl Pérez</span>
        </h1>
        <div className="img">
          <img src={LandingPhoto} alt="" />
        </div>
      </div>
    </div>
  );
}
