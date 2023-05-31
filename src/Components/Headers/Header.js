import React from 'react';
import Nav from './Nav.js';
import Content from './Content.js';

const Header = () => {
  return (
    <div className='header'>
        <Nav/>
        <Content/>
    </div>
  )
}

export default Header;