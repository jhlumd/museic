import React from 'react';
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/'>
        <div className='logo-bar rainbow'></div>
        <h1 className='logo-letter'>M</h1>
      </Link>
    </div>
  );
}

export default Logo;
