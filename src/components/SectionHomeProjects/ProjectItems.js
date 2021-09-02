import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../../assets/images/projectImg.png';
import './ProjectItems.css';

export default function ProjectItems({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <div className="projectItemsBody">
      <Link to="/projects" className="projectItems">
        <img src={img} alt="Project Img" className="projectImg" />
      </Link>
      <div className="projectInfo">
        <Link to="#">
          <h3 className="projectTitle">{title}</h3>
        </Link>
        <p className="projectDesc">{desc}</p>
      </div>
    </div>
  );
}
