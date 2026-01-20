import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Box,
  Typography,
  Avatar
} from '@mui/material';
import { Home, Work, ContactMail } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 260;

export default function Sidebar() {
  const location = useLocation();
  
  const menuItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Experience', icon: <Work />, path: '/experience' },
    { text: 'Contact', icon: <ContactMail />, path: '/contact' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          position: 'relative',
          borderRight: '1px solid rgba(0, 0, 0, 0.08)',
          background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
        },
      }}
    >
      {/* Logo/Brand Section */}
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>
          R
        </Avatar>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.2 }}>
            My Portfolio
          </Typography>
          <Typography variant="caption" color="text.secondary">
            React Developer
          </Typography>
        </Box>
      </Box>

      {/* Menu Items */}
      <List sx={{ px: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton 
              component={Link} 
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                borderRadius: 2,
                '&.Mui-selected': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                  '& .MuiListItemIcon-root': {
                    color: 'white',
                  },
                },
                '&:hover': {
                  bgcolor: 'rgba(25, 118, 210, 0.08)',
                },
              }}
            >
              <ListItemIcon 
                sx={{ 
                  minWidth: 40,
                  color: location.pathname === item.path ? 'white' : 'primary.main' 
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  fontWeight: location.pathname === item.path ? 600 : 500 
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}