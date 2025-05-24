import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const navLinks = [
  { title: 'Dashboard', path: '/' },
  { title: 'Services', path: '/services' },
  { title: 'Cost Control', path: '/cost-control' },
  { title: 'Settings', path: '/settings' },
];

const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* App Title */}
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            color: 'inherit',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          MyApp
        </Typography>

        {/* Desktop nav links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {navLinks.map(({ title, path }) => (
            <Button
              key={title}
              component={RouterLink}
              to={path}
              color="inherit"
              sx={{ textTransform: 'none' }}
            >
              {title}
            </Button>
          ))}
        </Box>

        {/* Mobile menu button */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="navigation menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {navLinks.map(({ title, path }) => (
              <MenuItem
                key={title}
                component={RouterLink}
                to={path}
                onClick={handleCloseNavMenu}
              >
                {title}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
