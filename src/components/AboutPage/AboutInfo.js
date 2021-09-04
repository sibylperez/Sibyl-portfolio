import React from 'react';
import AboutInfoItem from './AboutInfoIntem';
import TextLanding from '../Landing/TextLanding';
import AboutImg from '../../assets/images/about-page-img.png';
import './AboutInfo.css';

export default function AboutInfo() {
  return (
    <div className="AboutInfo">
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I'm <span>Sibyl Pérez</span>
            </p>
            <h2 className="about__heading">Full Stack Developer</h2>
            <div className="about__info">
              <TextLanding>
                I was born in Venezuela, but I live in Buenos Aires, Argentina,
                since 2016. When I moved to this beautiful country, I decided
                change my life, and that moment was when the opportunity
                presente itself to enter the world of programming and design.
                <br /> <br />I started my studies in programming in a
                self-taught way, until I met the <b>Henry Academy Bootcamp</b>,
                in which I could learn all the tools that I use today and
                develop incredible projects individually and in groups.
                <br />
                <br />
                My vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for us to
                create more good stuff that helps the world to become a better
                place.
              </TextLanding>
            </div>
            <a
              className="buttonLink"
              href="https://www.4shared.com/s/fRHwTfqFriq"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>

            <AboutInfoItem
              title="Bootcamp"
              items={['Henry Academy, Buenos Aires - Argentina']}
            />
            <AboutInfoItem
              title="Varsity"
              items={['ENAHP-IUT, Caracas - Venezuela']}
            />
            <AboutInfoItem
              title="Master"
              items={['Universidad del Caribe, Caracas - Venezuela']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>

            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JavaScript', 'REACT', 'Redux']}
            />
            <AboutInfoItem
              title="BackEnd"
              items={['NodeJS', 'Express', 'Sequelize', 'SQL']}
            />
            <AboutInfoItem title="Design" items={['Photoshop', 'Figma']} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>

            <AboutInfoItem
              title="2021"
              items={['Full-Stack Teaching Assistant in Henry Bootcamp']}
            />
            <AboutInfoItem
              title="2019-2020"
              items={['Logo designer Freelancer']}
            />
            <AboutInfoItem
              title="2016-"
              items={['Customs administrator, enterprise level development']}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
