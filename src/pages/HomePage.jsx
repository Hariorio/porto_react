import { 
  Typography, 
  Paper, 
  Box, 
  Grid, 
  Card, 
  CardContent,
  Avatar 
} from '@mui/material';
import { TrendingUp, Person, Work } from '@mui/icons-material';

export default function HomePage() {
  const stats = [
    { title: 'Total Projects', value: '12', icon: <Work />, color: '#1976d2' },
    { title: 'Experience', value: '3+ Years', icon: <TrendingUp />, color: '#2e7d32' },
    { title: 'Clients', value: '25+', icon: <Person />, color: '#ed6c02' },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Welcome Back! 👋
      </Typography>
      
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              elevation={0}
              sx={{ 
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: 3,
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                }
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: stat.color, width: 56, height: 56 }}>
                    {stat.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.title}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper 
        elevation={0}
        sx={{ 
          mt: 4, 
          p: 3, 
          border: '1px solid rgba(0, 0, 0, 0.08)',
          borderRadius: 3 
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
          About Me
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Saya adalah seorang React Developer yang passionate dalam membangun 
          aplikasi web modern dan user-friendly. Dengan pengalaman lebih dari 3 tahun, 
          saya telah menyelesaikan berbagai proyek menarik.
        </Typography>
      </Paper>
    </Box>
  )
}