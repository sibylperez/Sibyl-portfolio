import React from 'react';
import TextLanding from '../Landing/TextLanding';
import FooterCol from './FooterCol';
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
        <div className="footerCol2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footerCol3">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/sibyl-perez/',
              },
              {
                title: 'Github',
                path: 'https://github.com/sibylperez',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/Lady_Sweet_S',
              },
            ]}
          />
        </div>
        <div className="footerCol4">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: 'sibylperezl@gmail.com',
                path: 'mailto:sibylperezl@gmail.com',
              },
              {
                title: 'Buenos Aires, Argentina',
                path:
                  'https://www.google.com/maps/@-34.6144314,-58.4059233,14z',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <TextLanding>
            {' '}
            © 2021 copyright - Sibyl María | Pérez Rueda{' '}
          </TextLanding>
        </div>
      </div>
    </div>
  );
}
