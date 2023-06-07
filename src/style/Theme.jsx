// import React from 'react';
import { grey, red } from '@mui/material/colors';

const getDesignTokens = (mode) => ({
  typography: {
    body1: {
      textTransform: 'lowecase',
    },
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        secondary: red,
        /*
        primary: amber,
        divider: amber[200],
        */
        text: {
          primary: grey[900],
          secondary: red,
        },
      }
      : {
        // palette values for dark mode
        primary: grey,
        divider: grey[700],
        secondary: red,
        background: {
          default: grey[900],
          paper: '#121212',
          card: '#1e1a1a',
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
  },
});

export default getDesignTokens;
