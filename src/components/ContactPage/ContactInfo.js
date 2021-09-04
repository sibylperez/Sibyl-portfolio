import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import Title from '../utils/Title';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import './ContactInfo.css';

export default function ContactInfo() {
  return (
    <div className="contactInfo">
      <div className="container">
        <Title heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+5491130454371" />
            <ContactInfoItem icon={<MdEmail />} text="sibylperel@gmail.com" />
            <ContactInfoItem text="Buenos Aires, Argentina" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
