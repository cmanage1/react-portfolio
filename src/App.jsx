import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
// import Extra from './components/Extra';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Home from './components/Home';

const customTheme = createTheme({
  typography: {
    fontFamily: 'Mulish, sans-serif',
  },
  palette: {
    // mode: 'dark',
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Box>
        <Grid
          container
          sx={{ position: 'relative', display: 'flex' }}
          spacing={2}
        >
          <Grid item sx={{ height: '100vh' }} xs={4}>
            <Profile />
          </Grid>
          <Grid
            sx={{
              flexDirection: 'column',
              overflow: 'auto',
              height: '100vh',
            }}
            item
            xs={8}
          >
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                {/* <Route path="/extra" element={<Extra />} /> */}
              </Routes>
            </BrowserRouter>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
