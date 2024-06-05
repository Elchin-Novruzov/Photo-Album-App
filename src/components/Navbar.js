import React from 'react';
import { AppBar, Toolbar, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <AppBar position="static" className='padding-below-[2px]'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Browse Albums and Photos
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/albums">Albums</Button>
          <Button color="inherit" component={Link} to="/recently-viewed">Recently Viewed</Button>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;
