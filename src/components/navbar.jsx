import React from 'react';
import { Link } from 'react-router-dom';
// Stack component manages layout of immediate children along vertical/horizontal axis. Helps with lists of items
import { Stack } from '@mui/material';
import logo3 from '../assets/assets/images/logo3.png';

const Navbar = () => {
  return (
    <Stack>
      <Link to="/">
        <img src={logo3} alt="logo3" style={{
          width: '48px', height: '48px', margin: '0 20px' }}/>
      </Link>
      <Stack>
        <Link to="/">Home</Link>
        <a href="#exercises" style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
        <a href="#classes" style={{textDecoration: 'none', color: '#3A1212'}}>Classes</a>
        <a href="#gallery" style={{textDecoration: 'none', color: '#3A1212'}}>Gallery</a>
        <a href="#contact" style={{textDecoration: 'none', color: '#3A1212'}}>Contact</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
