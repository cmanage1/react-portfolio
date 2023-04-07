import {
  Box, Card, Grid, List, ListItem, ListItemText, Stack,
} from '@mui/material';
import React from 'react';
import chopperGif from '../images/chopper_gif_3.gif';

function Home() {
  return (
    <Stack spacing={10}>
      <Box>
        <Box sx={{ typography: 'h5' }}>👋 Hi  </Box>
        <Card sx={{ padding: '20px' }}>
          <Box sx={{ typography: 'body1' }}>
            I&apos;m a Full-Stack Developer based in Toronto and
            recent graduate with Honours in Computer Science.
            <br />
            <br />
            I have significant experience building large-scale user
            interfaces using
            {' '}
            <b>React.js</b>
            {' '}
            and developing complex
            {' '}
            <b>Python</b>
            {' '}
            server systems.
            I&apos;m also interested Artificial Intelligence and Machine Learning
            using classification models.

            <br />
            <br />
            My inbox is always open so feel free to contact me whenever :)
          </Box>
        </Card>
      </Box>
      <Box flexDirection="column">
        <Box>
          <Box sx={{ typography: 'h5' }}> 💻 I&apos;m currently ...  </Box>
          <Card sx={{ padding: '20px', paddingRight: '50px' }}>
            <Grid container spacing={1.5}>
              <Grid xs={7}>
                <Box sx={{ typography: 'body1' }}>
                  <List sx={{ listStyleType: 'disc', pl: 4 }} pad>
                    <ListItem sx={{ display: 'list-item', listStyleType: '-', pl: 1 }}>
                      <ListItemText
                        primary="Working as a Systems Developer for uOttawa Web Services"
                      />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStyleType: '-', pl: 1 }}>
                      <ListItemText
                        primary="Searching for Full-Stack Developer positions in Toronto"
                      />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStyleType: '-', pl: 1 }}>
                      <ListItemText
                        primary="Writing Python automations"
                      />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid xs={5}>
                <Box sx={{ textAlign: 'right' }}>
                  <img src={chopperGif} alt="chopper gif" width="35%" />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Box>
    </Stack>
  );
}

export default Home;
