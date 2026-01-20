import { Typography, Paper, Box, Divider } from '@mui/material';

export default function ExperiencePage() {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <Divider sx={{ mb: 2 }} />
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" color="primary">
          Frontend Developer
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          PT. Example Company • 2023 - Present
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Mengembangkan aplikasi web menggunakan React, MUI, dan Tailwind CSS.
        </Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" color="primary">
          Web Developer Intern
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          PT. Startup Tech • 2022 - 2023
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Belajar dan mengimplementasikan teknologi web modern.
        </Typography>
      </Box>
    </Paper>
  )
}