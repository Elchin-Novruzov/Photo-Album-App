import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/002/054/558/large_2x/light-blurry-blue-pastel-brown-gradient-colors-abstract-texture-background-free-photo.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
      <Container
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Home Page
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to the home page of the Browse Albums and Photos Web App.
        </Typography>
        <Box
          component="img"
          src="https://wallpapers.com/images/high/album-pictures-1641-x-924-3katags4mp0v5rr9.webp"
          alt="Content Image"
          sx={{
            width: '100%',
            maxWidth: '500px',
            borderRadius: '10px',
            marginTop: '20px',
          }}
        />
      </Container>
    </Box>
  );
};

export default HomePage;
