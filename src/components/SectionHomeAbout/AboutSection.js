import React from 'react';
import Title from '../utils/Title';
import Button from '../utils/Button';
import TextLanding from '../Landing/TextLanding';
import AboutImg from '../../assets/images/about-sec-img.png';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <div className="aboutBody">
      <div className="container">
        <div className="aboutLeft">
          <Title
            className="title"
            subheading="Let me introduce myself"
            heading="About me"
          />
          <TextLanding className="text">
            I'm a graduate student in Henry's Bootcamp, which focuses on Full
            Stack Web Development. I have been able to learn new programming
            languages and implement it through applications made individually
            and in groups. I love having challenges and learning every day
          </TextLanding>
          <div className="button2">
            <Button btnLink="/about" btnText="Read More" />
          </div>
        </div>
        <div className="aboutRight">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </div>
  );
}
