import React from 'react';
import TextLanding from '../Landing/TextLanding';
import './FooterContact.css';

export default function FooterContact() {
  return (
    <div className="footerBody">
      <div className="containerFooter">
        <div className="footerCol1">
          <h1 className="footerCol1Title">Sibyl Pérez</h1>
          <TextLanding>
            Full Stack Developer and designer. Prepare to create a true-to-brand
            appearance for a client. Committed to developing, organizing,
            managing and executing your projects.
          </TextLanding>
        </div>
      </div>
    </div>
  );
}
