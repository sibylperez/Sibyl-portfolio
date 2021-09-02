import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ProjectItems from './ProjectItems';
import Title from '../utils/Title';
import projects from '../../assets/data/projects';
import './ProjectsSection.css';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

export default function ProjectsSection() {
  return (
    <div className="projectSection">
      <Title subheading="Some of my recents works" heading="Projects" />
      <div className="allItems">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => {
            if (index >= 5) return;
            return (
              <SwiperSlide key={project.id}>
                <ProjectItems
                  title={project.name}
                  img={project.img}
                  desc={project.desc}
                />
                ;
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
