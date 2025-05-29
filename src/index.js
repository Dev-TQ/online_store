import React from 'react';
import './index.css'; 
import ReactDOM from 'react-dom/client';
import Router from './page/Rooter/Rout'; // مسار ملف الراوتر اللي انت عملته
import { RouterProvider } from 'react-router-dom';
import { createTheme } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);