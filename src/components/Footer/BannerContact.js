import React from 'react';
import Button from '../utils/Button';
import TextLanding from '../Landing/TextLanding';
import './BannerContact.css';

export default function BannerContact() {
  return (
    <div className="bannerBody">
      <div className="container">
        <div className="contactBanner">
          <TextLanding>Have a project in mind</TextLanding>
          <h3 className="contactHeading">Let me help you</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </div>
  );
}
