import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAlbumPhotos, addPhotoToAlbum, updatePhoto, removePhotoFromAlbum } from '../services/api';
import Photo from './Photo';
import PhotoModal from './PhotoModal';
import { Grid, Container, Pagination, Typography, Button } from '@mui/material';

const AlbumDetail = () => {
  const { id: albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  useEffect(() => {
    getAlbumPhotos(albumId).then(setPhotos);
  }, [albumId]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleAddPhoto = () => {
    const newPhoto = {
      title: 'New Photo',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    };
    addPhotoToAlbum(albumId, newPhoto).then(photo => {
      setPhotos([photo, ...photos]);
    });
  };

  const handleEditPhoto = (photo) => {
    updatePhoto(photo.id, photo).then(updatedPhoto => {
      setPhotos(photos.map(p => p.id === updatedPhoto.id ? updatedPhoto : p));
    });
  };

  const handleDeletePhoto = (photoId) => {
    removePhotoFromAlbum(photoId).then(() => {
      setPhotos(photos.filter(photo => photo.id !== photoId));
    });
  };

  const handleOpenModal = (photo) => {
    setCurrentPhoto(photo);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentPhoto(null);
  };

  const paginatedPhotos = photos.slice((page - 1) * 20, page * 20);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Photos
      </Typography>
      <Button variant="contained" color="primary" onClick={handleAddPhoto}>
        Add Photo
      </Button>
      <Grid container spacing={2}>
        {paginatedPhotos.map((photo) => (
          <Grid item key={photo.id} xs={12} sm={6} md={4}>
            <Photo
              photo={photo}
              onDelete={() => handleDeletePhoto(photo.id)}
              onEdit={() => handleOpenModal(photo)}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination count={Math.ceil(photos.length / 20)} page={page} onChange={handlePageChange} />
      <PhotoModal open={modalOpen} onClose={handleCloseModal} onSave={handleEditPhoto} photo={currentPhoto} />
    </Container>
  );
};

export default AlbumDetail;
