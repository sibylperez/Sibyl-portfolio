import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({ btnLink = 'test', btnText = 'test' }) {
  return (
    <div className="btnStyle">
      <Link className="button1" to={btnLink}>
        {btnText}
      </Link>
    </div>
  );
}
