import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import {Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import  {Typography,IconButton,Avatar, Link as MuiLink, ListItemIcon, ListItemButton, Container}from '@mui/material';
const MyAppBar = () => {
  const [name,setname]= useState("Towfiqe")
  return (
    <Box>
        <AppBar sx={{ml:"25%",width:"75%"}} position="static" color='primary'>
        <Toolbar>
     <MuiLink component={RouterLink} to="/Create" underline='none' sx={{ color:"black",background:"none",flexGrow:1,display:"flex"}}>
          {/* <MenuIcon  sx={{md:{display:"none"}}}/> */}
          {""}
      </MuiLink>
     <MuiLink component={RouterLink} to="/" underline='none' sx={{ color:"black",background:"none"}}>
        Towfiqe
      </MuiLink>
      <MuiLink component={RouterLink} to="/Home" sx={{background:"none", color:"black"}}>
      <Avatar src='./image/man.jpg' alt="Shape">{name.charAt(0)}</Avatar>
      </MuiLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MyAppBar;
