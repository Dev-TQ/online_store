
import "./Home.css"
import React from 'react';
import { Typography, Button, IconButton } from "@mui/material";
import theme from "Theme/Theme";
// icons
import DeleteIcon from '@mui/icons-material/Delete';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

const Home = () => {
  
  return (

    <div>
    <Typography noWrap  className="stayleHome" sx={{marginTop:"auto"}} color="primary" variant="h4" component="div">
  This is one way to use styles in MUI (external CSS + sx)
    </Typography>                                 
    <Button variant="text" color="primary" endIcon={<DeleteIcon/>} sx={{mx:"auto",mt:2,display:"flex"}}>
      حذف
    </Button>
    <IconButton sx={{mx:"auto",mt:2,display:"block"}} color="secondary" size="medium">
      <SystemUpdateAltIcon fontSize="inherit"/>
    </IconButton>
    </div>
  );
};
export default Home;
  