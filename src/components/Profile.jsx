import {
  Box, IconButton, Button, Stack,
} from '@mui/material';
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import pic from '../images/portfolio_main.jpg';
import { ProfileArea } from './styled';

function Profile() {
  return (
    <ProfileArea spacing={2}>
      <Stack spacing={1}>
        <Box sx={{ typography: 'h4' }}>Chethin Manage</Box>
        <Box>
          <img
            style={{ width: '50%', height: 'auto' }}
            src={pic}
            alt="profile-img"
          />
        </Box>

        <Stack direction="row" justifyContent="center" spacing={1}>
          <IconButton
            variant="contained"
            aria-label="linkedin link"
            href="https://www.linkedin.com/in/chethinm/"
            target="__blank"
          >
            <FaLinkedin color="white" />
          </IconButton>
          <IconButton
            variant="contained"
            aria-label="github link"
            href="https://github.com/cmanage1/"
            target="__blank"
          >
            <FaGithub color="white" />
          </IconButton>
          <IconButton
            variant="contained"
            aria-label="email"
            href="mailto:chethin.manage@gmail.com"
          >
            <FaEnvelope color="white" />
          </IconButton>
        </Stack>
        <Box padding="15px">
          <Button
            variant="contained"
            color="secondary"
            href="https://drive.google.com/file/d/1nC7sxtu7Ftk_Vyu4LI0XGy-9wBs9GsMW/view?usp=sharing"
            target="__blank"
          >
            Resume
          </Button>
        </Box>
      </Stack>
    </ProfileArea>
  );
}

export default Profile;
