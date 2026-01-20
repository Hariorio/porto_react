import { AppBar, Toolbar, Typography, IconButton, Box, Avatar } from '@mui/material';
import { Search, Notifications } from '@mui/icons-material';

export default function Navbar() {
  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        bgcolor: 'white',
        color: 'text.primary',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
          Dashboard
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <Notifications />
          </IconButton>
          <Avatar sx={{ width: 32, height: 32, ml: 1, bgcolor: 'primary.main' }}>
            U
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  )
}