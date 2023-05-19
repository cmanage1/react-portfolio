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
            As a Full-Stack Developer based in Toronto and recent graduate
            of Honours B.Sc. in Computer Science from uOttawa,
            I specialize in building robust user interfaces with
            {' '}
            <b>React.js</b>
            {' '}
            and developing sophisticated
            {' '}
            <b>Python</b>
            {' '}
            server systems.
            <br />
            <br />
            I&apos;m particularly passionate about Artificial Intelligence and
            Machine Learning, dedicating most of my time to furthering my
            knowledge in it.

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
                        primary="Searching for Full-Stack Developer positions in Toronto"
                      />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStyleType: '-', pl: 1 }}>
                      <ListItemText
                        primary="Learning Supervised Machine Learning online"
                      />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStyleType: '-', pl: 1 }}>
                      <ListItemText
                        primary="Doing small research projects"
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
