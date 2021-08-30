import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="nav">
      <ul className="ul">
        <li className="li">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="li">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="li">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="li">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
