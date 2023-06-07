import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { createTheme, Paper, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
// import Extra from './components/Extra';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Home from './components/Home';
import getDesignTokens from './style/Theme';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Paper>
          <Grid
            container
            sx={{ position: 'relative', display: 'flex' }}
          // spacing={2}
            columnSpacing={2}
          >
            <Grid
              item
              sx={{ height: '100vh' }}
              xs={4}
            >
              <Profile />
            </Grid>
            <Grid
              item
              sx={{
                overflowY: 'auto',
                overflowX: 'hidden',
                height: '100vh',
                paddingRight: 2,
              }}
              xs={8}
            >
              <Box>
                <BrowserRouter>
                  <Navbar colorMode={colorMode} theme={theme} mode={mode} />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    {/* <Route path="/extra" element={<Extra />} /> */}
                  </Routes>
                </BrowserRouter>
              </Box>
              <Footer />
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
