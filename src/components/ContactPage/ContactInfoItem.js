import React from 'react';
import { MdPlace } from 'react-icons/md';
import TextLanding from '../Landing/TextLanding';
import './ContactInfoItem.css';

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <div className="itemStyle">
      <div className="icon">{icon}</div>
      <div className="info">
        <TextLanding>{text}</TextLanding>
      </div>
    </div>
  );
}
