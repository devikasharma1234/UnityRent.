import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import GoogleTranslate from './GoogleTranslate.jsx'; // Ensure path is correct
import './Navbar.css';

const pages = ['Home', 'Browse', 'About Us', 'Login'];
const settings = ['Profile', 'My Rentals', 'Logout'];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  // Handler for search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log("Searching for:", e.target.value); 
    // You can pass this searchQuery to your parent component to filter items
  };

  return (
    <AppBar position="sticky" className="navbar-main" sx={{ bgcolor: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          
          {/* 1. LOGO SECTION */}
          <Typography 
            variant="h6" 
            noWrap 
            component="a" 
            href="/" 
            className="brand-logo"
            sx={{ fontWeight: 800, color: '#002d5b', textDecoration: 'none' }}
          >
            UnityRent
          </Typography>

          {/* 2. SEARCH SECTION */}
          <Box className="search-wrapper" sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            bgcolor: '#f1f3f4', 
            px: 2, 
            borderRadius: '20px',
            flexGrow: 0.5,
            mx: 4
          }}>
            <SearchIcon fontSize="small" sx={{ color: '#5f6368', mr: 1 }} />
            <InputBase
              placeholder="Search for cycles, books, tech..."
              fullWidth
              value={searchQuery}
              onChange={handleSearch}
              sx={{ fontSize: '0.9rem' }}
            />
          </Box>

          {/* 3. NAV LINKS & UTILS */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            
            {/* Desktop Nav Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '15px', mr: 2 }}>
              {pages.map((page) => (
                <Button key={page} sx={{ color: '#333', textTransform: 'none', fontWeight: 600 }}>
                  {page}
                </Button>
              ))}
            </Box>

            {/* --- TRANSLATION ICON ADDED HERE --- */}
            <GoogleTranslate />

            {/* USER PROFILE */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)} sx={{ p: 0, ml: 1 }}>
                  <Avatar alt="User" sx={{ width: 35, height: 35, bgcolor: '#002d5b' }}>M</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={() => setAnchorElUser(null)}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => setAnchorElUser(null)}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;