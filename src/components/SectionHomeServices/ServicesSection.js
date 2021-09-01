import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import Title from '../utils/Title';
import ServicesIcons from './ServicesIcons';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <Title subheading="What I will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesIcons
            icon={<MdDesktopMac />}
            title="web design"
            desc="Design UI/UX for the website to get a unique look."
          />
          <ServicesIcons
            icon={<MdCode />}
            title="web dev"
            desc="Develop the websites. Programming Languages: 
            ◉JavaScript
            ◉React
            ◉Redux
            ◉Express
            ◉Sequelize
            ◉PostgreSQL"
          />
          <ServicesIcons
            icon={<MdPhonelinkSetup />}
            title="app dev"
            desc="Loading.... Studies in progress. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
