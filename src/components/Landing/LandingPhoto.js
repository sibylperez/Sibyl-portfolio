import React from 'react';
import TextLanding from './TextLanding';
import Button from '../utils/Button';
import LandingPhoto from '../../assets/images/hero.png';
import SocialMediaArrow from '../../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../../assets/images/scroll-down-arrow.svg';
import './LandingPhoto.css';

export default function Landing() {
  return (
    <div className="landingBody">
      <div className="container">
        <h1 className="heading">
          <span className="span">Hello, This is</span>
          <span className="name">Sibyl Pérez</span>
        </h1>
        <div className="imagen">
          <img src={LandingPhoto} alt="" />
        </div>
        <div className="textLand">
          <TextLanding>
            Full Stack Developer and designer. Prepare to create a true-to-brand
            appearance for a client. Committed to developing, organizing,
            managing and executing your projects
          </TextLanding>
          <Button btnLink="/projects" btnText="See my projects" />
        </div>
        <div className="social">
          <div className="socialIndicator">
            <p className="p">Follow</p>
            <img className="arrow" src={SocialMediaArrow} alt="icon" />
          </div>
          <div className="socialText">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/sibyl-perez/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LD
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sibylperez"
                  target="_blank"
                  rel="noreferrer"
                >
                  GH
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Lady_Sweet_S"
                  target="_blank"
                  rel="noreferrer"
                >
                  TW
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="scrollDown">
          <p className="p">Scroll</p>
          <img className="arrow" src={ScrollDownArrow} alt="ScrollDown Arrow" />
        </div>
      </div>
    </div>
  );
}
