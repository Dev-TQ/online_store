import { createRoutesFromChildren } from "react-router-dom"
import "./Home.css"
import React from 'react';
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
    <Typography noWrap  sx={{marginTop:"auto"}} color="primary" variant="h4" component="div">
      Welcome to the Home pageWelcome to the Home pageWelcome to the Home pageWelcome to the Home pageWelcome to the Home pageWelcome to the Home page
    </Typography>
    <Typography gutterBottom variant="body1" color="initial">ddddd</Typography>
    <Typography  variant="body1" color="initial">ddddd</Typography>
    <Typography sx={{margin:"100px"}}  variant="inherit" color="initial">this typographt</Typography>
    </div>
  );
}

export default Home;
