import React, { useState, useEffect } from 'react';
import { getPhoto } from '../services/api';
import { Container, Typography } from '@mui/material';

const PhotoDetail = ({ photoId }) => {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    getPhoto(photoId).then(setPhoto);
  }, [photoId]);

  if (!photo) return null;

  return (
    <Container>
      <img src={photo.url} alt={photo.title} style={{ width: '100%' }} />
      <Typography variant="h5" gutterBottom>
        {photo.title}
      </Typography>
    </Container>
  );
};

export default PhotoDetail;
