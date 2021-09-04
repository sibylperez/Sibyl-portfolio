import React from 'react';
import TextLanding from '../Landing/TextLanding';
import './AboutInfoItem.css';

export default function AboutInfoIntem({
  title = 'Title',
  items = ['HTML', 'CSS'],
}) {
  return (
    <div className="AIIBody">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <TextLanding>{item}</TextLanding>
          </div>
        ))}
      </div>
    </div>
  );
}
