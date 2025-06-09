import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import {Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import  {Typography,IconButton,Avatar, Link as MuiLink, ListItemIcon, ListItemButton, Container}from '@mui/material';
const MyAppBar = () => {
  const [name,setname]= useState("Towfiqe");
  const theme= useTheme()
    // @ts-ignore
    const colortext=theme.palette.mode==="dark"?"#f1f1f1":"#222";
    // @ts-ignore
    const colorback=theme.palette.mode==="dark"?"#222":"#f1f1f1";
  return (
    <Box >
        <AppBar sx={{ml:"25%",width:"75%",color:colortext,background:colorback}} position="static" >
        <Toolbar>
     <MuiLink component={RouterLink} to="/Create" underline='none' sx={{ color:colortext,background:colorback,flexGrow:1,display:"flex"}}>
          {""}
      </MuiLink>
     <MuiLink sx={{color:colortext,background:colorback}} component={RouterLink} to="/" underline='none' >
        Towfiqe
      </MuiLink>
      <MuiLink component={RouterLink} to="/Home" sx={{background:colorback, color:colortext}}>
      <Avatar src='./image/man.jpg' alt="Shape">{name.charAt(0)}</Avatar>
      </MuiLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MyAppBar;
