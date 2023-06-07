import { Box, IconButton } from '@mui/material';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <Box
      sx={{
        bottom: 0,
        textAlign: 'center',
        paddingTop: '10px',
      }}
    >
      <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
        <Box sx={{ typography: 'body1' }}>Source code:</Box>
        <IconButton
          href="https://github.com/cmanage1/cmanage1.github.io"
          target="__blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} color="#98132A" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
