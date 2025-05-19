import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

// Custom theme for the jewelry shop
const theme = createTheme({
  palette: {
    primary: {
      main: "#B76E79", // Rose gold
      light: "#E8C6C9",
      dark: "#8E4A52",
    },
    secondary: {
      main: "#C0C0C0", // Silver
      light: "#E5E5E5",
      dark: "#909090",
    },
    background: {
      default: "#FFF9F5", // Soft cream background
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily:
      '"Playfair Display", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
