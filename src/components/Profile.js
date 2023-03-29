import { Box, IconButton } from "@mui/material";
import React from "react";
import pic from "../images/portfolio_main.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ProfileArea } from "./styled";

function Profile() {
  return (
    <ProfileArea spacing={2}>
      <Box sx={{ typography: "h4" }}>Chethin Manage</Box>
      <Box>
        <img
          style={{ width: "50%", height: "auto" }}
          src={pic}
          alt="profile-img"
        />
      </Box>

      <Box>
        <IconButton
          variant="contained"
          aria-label="linkedin link"
          href={"https://www.linkedin.com/in/chethinm/"}
          target="__blank"
        >
          <FaLinkedin color="white" />
        </IconButton>
        <IconButton
          variant="contained"
          aria-label="github link"
          href={"https://github.com/cmanage1/"}
          target="__blank"
        >
          <FaGithub color="white" />
        </IconButton>
        <IconButton
          variant="contained"
          aria-label="email"
          href={"mailto:chethin.manage@gmail.com"}
        >
          <FaEnvelope color="white" />
        </IconButton>
      </Box>
    </ProfileArea>
  );
}

export default Profile;
