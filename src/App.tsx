import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import PopularVenues from './components/PopularVenues';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3B82F6',
    },
    secondary: {
      main: '#6366F1',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Hero />
        <Features />
        <PopularVenues />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;