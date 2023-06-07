import { Grid, Box } from '@mui/material';
import React from 'react';
import { ModeButton, Nav, NavLink } from '../style/styled';

function Navbar(props) {
  // eslint-disable-next-line react/prop-types
  const { colorMode, theme, mode } = props;

  return (
    <Grid container alignItems="center">
      <Grid item xs={10}>
        <Nav>
          <Box display="flex" flexDirection="row" gap={4}>
            <NavLink toProp="/" buttonText="home" />
            <NavLink toProp="/about" buttonText="about" />
            <NavLink toProp="/experience" buttonText="experience" />
            <NavLink toProp="/projects" buttonText="projects" />
            {/* <NavLink toProp="/extra" buttonText="Extra" /> */}
          </Box>
        </Nav>
      </Grid>
      <Grid item xs={2}>
        <ModeButton colorMode={colorMode} theme={theme} mode={mode} />
      </Grid>
    </Grid>
  );
}

export default Navbar;
