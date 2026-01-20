import { Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import HomePage from './pages/HomePage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';

// Custom Theme dengan font size lebih kecil
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f7fa',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 13, // Default 14, kita turunkan jadi 13
    h1: { fontSize: '2rem' },      // Default 6rem
    h2: { fontSize: '1.75rem' },   // Default 3.75rem
    h3: { fontSize: '1.5rem' },    // Default 3rem
    h4: { fontSize: '1.25rem' },   // Default 2.125rem
    h5: { fontSize: '1.1rem' },    // Default 1.5rem
    h6: { fontSize: '1rem' },      // Default 1.25rem
    body1: { fontSize: '0.875rem' }, // Default 1rem
    body2: { fontSize: '0.8rem' },   // Default 0.875rem
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Navbar />
          
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/experience' element={<ExperiencePage />} />
              <Route path='/contact' element={<ContactPage />} />
            </Routes>
          </Box>
          
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  )
}