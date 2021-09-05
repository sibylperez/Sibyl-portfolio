import React from 'react';
import TextLanding from '../Landing/TextLanding';
import './Map.css';

export default function Map() {
  return (
    <div className="mapStyle">
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <TextLanding>CABA, Buenos Aires - Argentina</TextLanding>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/@-34.6144314,-58.4059233,14z"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
    </div>
  );
}
