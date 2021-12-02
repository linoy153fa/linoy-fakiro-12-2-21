import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export function Header() {
  return (
    <div className={`header-container`}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' color='transparent'>
          <Toolbar className='flex'>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <Link to={'/'}>Herolo-Abra WeatherApp</Link>
            </Typography>

            <div className='header-btns-container flex'>
              <Button color='inherit'>
                <NavLink to={'/'} className='navlink' exact>
                  Home
                </NavLink>
              </Button>
              <Button color='inherit'>
                <NavLink to={'/favorites'} className='navlink'>
                  Favorites
                </NavLink>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
