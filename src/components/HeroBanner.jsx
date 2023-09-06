import React from 'react';
// Typography is like a header
import { Box, Stack, Typography } from '@mui/material';

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
      sx={{ fontsize: { lg: '44px', xs: '40px'}}}>
        Keeping Yourself Fit <br /> and Ready
      </Typography>
      <Typography fontSize="22px"
      lineHeight="35px">
        Check out our classes today
      </Typography>
    </Box>
  )
}

export default HeroBanner
