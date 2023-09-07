import React from 'react';
import { Link } from 'react-router-dom';
// Stack component manages layout of immediate children along vertical/horizontal axis. Helps with lists of items
import { Stack } from '@mui/material';
import logo4 from '../assets/assets/images/logo4.png';

const Navbar = () => {
  return (
    <Stack direction="row"
    justifyContent="space-around" sx={{ gap: {
      sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none'}} px="20px">
      <Link to="/">
        <img src={logo4} alt="logo3" style={{
          width: '48px', height: '48px', margin: '0 20px' }}/>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end">
        { /* Links to individual pages on website */ }
        <Link to="/" style={{ textDecoration: 'none', color: "#3A1212", borderBottom: '3px solid #FF2625'}}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
        <a href="#classes" style={{textDecoration: 'none', color: '#3A1212'}}>Classes</a>
        <a href="#gallery" style={{textDecoration: 'none', color: '#3A1212'}}>Gallery</a>
        <a href="#contact" style={{textDecoration: 'none', color: '#3A1212'}}>Contact</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
