import React from 'react';
import './index.css'; 
import ReactDOM from 'react-dom/client';
import Router from './page/Rooter/Rout'; // مسار ملف الراوتر اللي انت عملته
import { RouterProvider } from 'react-router-dom';
import { createTheme } from '@mui/material';
import { ThemeProvider} from "@mui/material/styles";
import { Home } from '@mui/icons-material';
import theme from 'Theme/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>
);