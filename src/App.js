
import { Link, Outlet,Link as RouterLink  } from 'react-router-dom';
import * as React from 'react';
import Drawe from 'Drawer/Drawer';
import { Box } from '@mui/material';
import MyAppBar from 'AppBar/MyAppBar';
import { useContext } from 'react';
const App = () => {
  const spacingMl="25%"
  return (
    <Box>
      <MyAppBar/>
      <Drawe/>
      <Box component={"main"} sx={{ ml:`${spacingMl}`,display:"flex",justifyContent:"center"}}>
      <Outlet />
      </Box>
    </Box>
  );
}

export default App;

