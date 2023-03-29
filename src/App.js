import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Speaking from "./components/Speaking";
import Navbar from "./components/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Profile from "./components/Profile";
import { createTheme, ThemeProvider } from "@mui/material";
import Footer from "./components/Footer";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Profile />
          </Grid>
          <Grid item xs={8}>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/speaking" element={<Speaking />} />
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
