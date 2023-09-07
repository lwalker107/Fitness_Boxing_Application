import React from 'react';
// Typography is like a header
import { Box, Stack, Typography, Button, ButtonGroup } from '@mui/material';
import HeroBannerImage from '../assets/assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position="relative" p="20px">
      <Typography color="#FF2625"
      fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight="700"
      sx={{ fontsize: { lg: '44px', xs: '40px'}, color: "white"}}>
        Keeping Yourself Fit <br /> and Ready
      </Typography>
      <Typography fontSize="22px"
      lineHeight="35px" mb={3} color="white">
        Check out all we have to offer today!
      </Typography>
      <ButtonGroup 
      disableElevation 
      variant="contained" 
      color="error" 
      aria-label="Disabled elevation buttons"
      sx={{ backgroundColor: '#ff2625', padding: '5px' }}
      >
        <Button href='#exercises'>Exercises</Button>
        <Button href='#classes'>Classes</Button>
      </ButtonGroup>
      <img src={HeroBannerImage} alt="banner" 
      className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner
