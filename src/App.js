
import { Link, Outlet,Link as RouterLink  } from 'react-router-dom';
import * as React from 'react';
import  {AppBar,Box,Typography,Button,IconButton,Toolbar,Avatar, Link as MuiLink }from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import theme from 'Theme/Theme';
import { useState } from 'react';

const App = () => {
  const [name,setname]=useState("salman")
  return (
       <Box >
      <AppBar position="static" color='primary'>
        <Toolbar>
     <MuiLink component={RouterLink} to="/Create" underline='none' sx={{ color:"black",background:"none",flexGrow:1,display:"flex"}}>
          <MenuIcon />
      </MuiLink>
     <MuiLink component={RouterLink} to="/" underline='none' sx={{ color:"black",background:"none"}}>
        Towfiqe
      </MuiLink>
      <MuiLink component={RouterLink} to="/Home" sx={{background:"none", color:"black"}}>
      <Avatar src='./image/man.jpg' alt="Shape">{name.charAt(0)}</Avatar>
      </MuiLink>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>

  );
}

export default App;

