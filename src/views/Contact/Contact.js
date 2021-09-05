import React from 'react';
import ContactInfo from '../../components/ContactPage/ContactInfo';
import Map from '../../components/PhotoMap/Map';
import FooterContact from '../../components/Footer/FooterContact';

export default function About() {
  return (
    <div>
      <ContactInfo />
      <Map />
      <FooterContact />
    </div>
  );
}
