import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import axios from 'axios';

const RecentlyViewed = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20');
        const fetchedPhotos = response.data;
        shuffleArray(fetchedPhotos);
        setPhotos(fetchedPhotos);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom paddingTop={"15px"}>
        Recently Viewed Photos
      </Typography>
      <Grid container spacing={2}>
        {photos.map((photo) => (
          <Grid item key={photo.id} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: 2 }}>
              <CardActionArea>
                <CardMedia component="img" height="140" image={photo.thumbnailUrl} alt={photo.title} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {photo.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RecentlyViewed;
