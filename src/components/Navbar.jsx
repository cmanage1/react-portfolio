import { Stack } from '@mui/material';
import React from 'react';
import { Nav, NavLink } from './styled';

function Navbar() {
  return (
    <div>
      <Nav>
        <Stack sx={{ display: 'inline-block' }} direction="row" spacing={2}>
          <NavLink toProp="/" buttonText="About" />
          <NavLink toProp="/experience" buttonText="Experience" />
          <NavLink toProp="/projects" buttonText="Projects" />
          {/* <NavLink toProp="/extra" buttonText="Extra" /> */}
        </Stack>
      </Nav>
    </div>
  );
}

export default Navbar;
