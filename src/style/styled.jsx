/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  ListItem,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Item = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  justifyContent: 'center',
  backgroundColor: theme.palette.background.card,
}));

function CustomCard(props) {
  return (
    <Item>
      <Grid container spacing={1.5}>
        <Grid item xs={2}>
          <Box sx={{ justifyContent: 'right' }}>
            <img
              style={{ width: '140px', height: 'auto' }}
              src={props.logo}
              alt={props.logoAlt}
            />
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              verticalAlign: 'bottom',
            }}
          >
            <Box sx={{ typography: 'h6' }}>{props.mainTitle}</Box>
            <Box sx={{ typography: 'body1' }}>{props.date}</Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ typography: 'body1' }}>{props.secondaryTitle}</Box>
            <Box sx={{ typography: 'body1' }}>{props.location}</Box>
          </Box>
          {props.plainDescription ? (
            <Box
              sx={{
                paddingTop: '20px',
                typography: 'body2',
              }}
            >
              {props.plainDescription}
            </Box>
          ) : (
            <Box>
              <ul>
                {props.listDescription.map((item) => (
                  <ListItem
                    dense
                    disableGutters
                    sx={{ display: 'list-item', listStyleType: 'disc', pl: 1 }}
                    key={item}
                  >
                    <Box key={item} sx={{ typography: 'body2' }}>{item}</Box>
                  </ListItem>
                ))}
              </ul>
            </Box>
          )}
        </Grid>
      </Grid>
    </Item>
  );
}
const ProjectItem = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  justifyContent: 'center',
  maxWidth: 300,
  backgroundColor: theme.palette.background.card,
}));

function ProjectCard(props) {
  return (
    <ProjectItem>
      <CardMedia component="img" height="194" image={props.demoImage} />
      <CardContent>
        <Box sx={{ typography: 'h5', fontWeight: 'bold' }}>
          {' '}
          {props.title}
          {' '}
        </Box>
        <Box sx={{ typography: 'body1' }}>
          {' '}
          {props.subheader}
          {' '}
        </Box>
        <Box
          sx={{
            typography: 'body1',
            fontWeight: 'light',
            fontSize: '13px',
            paddingBottom: '10px',
          }}
        >
          {' '}
          {props.techStack}
          {' '}
        </Box>
        <Box sx={{ typography: 'body2', color: 'text.secondary' }}>
          {props.description}
        </Box>
      </CardContent>
      <CardActions>
        {props.github ? (
          <Button size="small" target="__blank" href={props.github} variant="outlined">
            Github
          </Button>
        ) : (
          ''
        )}
        {props.colab ? (
          <Button size="small" target="__blank" href={props.colab} variant="outlined">
            Google Colab
          </Button>
        ) : (
          ''
        )}
      </CardActions>
    </ProjectItem>
  );
}

const Nav = styled('nav')(() => ({
  textAlign: 'center',
  padding: '15px',
}));

function NavLink(props) {
  return (
    <Box>
      <Link
        to={props.toProp}
        style={{
          textDecoration: 'underline',
          fontWeight: '500',
          color: 'inherit',
        }}
      >
        <Box
          typography="subtitle1"
          sx={{
            textDecoration: 'none',
            fontWeight: 'strong',
          }}
        >
          {props.buttonText}
        </Box>
      </Link>
    </Box>
  );
}

const ProfileArea = styled(Stack)(() => ({
  color: 'white',
  backgroundColor: '#121212',
  padding: 8,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  height: '100%',
}));

const ProjectStack = styled(Stack)(() => ({
  padding: 8,
  justifyContent: 'center',
}));

function SkillsList(props) {
  return (
    <Stack direction="row" spacing={1}>
      {props.skills.map((label) => <Chip key={label} label={label} variant="outlined" />)}
    </Stack>
  );
}

function ModeButton(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      <Box typography="body1">
        {props.mode}
        {' '}
        mode
      </Box>
      <IconButton sx={{ ml: 1 }} onClick={props.colorMode.toggleColorMode} color="inherit">
        {props.theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export {
  Item,
  CustomCard,
  Nav,
  NavLink,
  ProjectCard,
  ProfileArea,
  ProjectStack,
  SkillsList,
  ModeButton,
};
