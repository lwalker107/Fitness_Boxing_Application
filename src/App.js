import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// Box is essentially just div but with shading 
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Homepage from './pages/homepage';
import Navbar from './components/navbar';
import Footer from './components/Footer'
// Keeps the routes for each individual page
const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
