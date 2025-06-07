
import { Link, Outlet,Link as RouterLink  } from 'react-router-dom';
import * as React from 'react';

import Drawe from 'Drawer/Drawer';

import { Box } from '@mui/material';
import MyAppBar from 'AppBar/MyAppBar';
const App = () => {
  return (
    <Box>
      <MyAppBar/>
      <Drawe/>
      <Outlet />
    </Box>
  );
}

export default App;

