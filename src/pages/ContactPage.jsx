import { Typography, Paper, TextField, Button, Box } from '@mui/material';

export default function ContactPage() {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Silakan hubungi saya melalui form di bawah ini.
      </Typography>
      
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Nama" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth type="email" />
        <TextField label="Pesan" variant="outlined" fullWidth multiline rows={4} />
        <Button variant="contained" color="primary" sx={{ mt: 1 }}>
          Kirim
        </Button>
      </Box>
    </Paper>
  )
}