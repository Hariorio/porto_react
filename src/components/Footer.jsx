import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 2, 
        px: 3, 
        backgroundColor: 'white',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        textAlign: 'center'
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2025 My Portfolio. Built with ❤️ using React & MUI
      </Typography>
    </Box>
  )
}