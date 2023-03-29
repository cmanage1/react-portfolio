import { Box, IconButton } from "@mui/material";
import React from "react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Box
      sx={{
        bottom: 0,
        position: "relative",
        textAlign: "center",
        justifyContent: "space-between",
        paddingTop: "10px",
      }}
    >
      <Box sx={{ display: "inline-flex", alignItems: "center" }}>
        Source code : {"  "}
        <IconButton
          href="https://github.com/cmanage1/react_portfolio"
          target="__blank"
        >
          <FaGithub size={20} color="purple" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
