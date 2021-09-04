import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import Title from '../utils/Title';
import ProjectsInfo from '../../assets/data/projects';
import ProjectItems from '../SectionHomeProjects/ProjectItems';
import './ProjectsInfo.css';

export default function AllProjects() {
  const [searchText, setSearchText] = useState('');
  const [projectsData, setProjectsData] = useState(ProjectsInfo);

  useEffect(() => {
    if (searchText === '') return;
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectsInfo);
    }
  };

  return (
    <div className="project">
      <div className="container">
        <Title subheading="Some of my recent works" heading="Projects" />
        <div className="projects__searchBar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Project Name"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects__allItems">
          {projectsData.map((item) => (
            <ProjectItems
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
