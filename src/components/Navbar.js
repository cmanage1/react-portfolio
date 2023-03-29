import { Stack } from "@mui/system";
import React from "react";
import { Nav, NavLink } from "./styled";

function Navbar() {
  return (
    <div>
      <Nav>
        <Stack sx={{ display: "inline-block" }} direction="row" spacing={2}>
          <NavLink toProp="/" buttonText="About" />
          <NavLink toProp="/experience" buttonText="Experience" />
          <NavLink toProp="/projects" buttonText="Projects" />
          <NavLink toProp="/speaking" buttonText="Speaking" />
        </Stack>
      </Nav>
    </div>
  );
}

export default Navbar;
