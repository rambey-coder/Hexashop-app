import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
  return (
      <div className="error">
          <h1>Oopps!</h1>
          <p>Not Found</p>
          <Link to='/' className='err-btn'>
              Go To Homepage
          </Link>
      </div>
  );
};

export default Error;
