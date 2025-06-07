import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
const About = () => {
  return (
      <Box sx={{ width: "75%", ml: "25%", mt: 15, bgcolor: "info.main" }}>
      <Typography variant="h5" color="white" component={"h1"}>
     <IconButton >
          <InfoIcon sx={{color:"white"}}/> 
        </IconButton>
      </Typography>
    </Box>
  );
}

export default About;
