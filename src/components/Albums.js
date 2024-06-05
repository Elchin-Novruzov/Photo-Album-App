import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAlbums, createAlbum, updateAlbum, deleteAlbum, searchItems } from '../services/api';
import Album from './Album';
import AlbumModal from './AlbumModal';
import Search from './Search';
import { Container, Typography, Grid, Button, Pagination } from '@mui/material';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAlbums().then(data => {
      setAlbums(data);
      setFilteredAlbums(data);
    });
  }, []);

  const handleAlbumClick = (id) => {
    navigate(`/album/${id}`);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = (query) => {
    if (query) {
      searchItems(query).then(result => {
        setFilteredAlbums(result.albums);
      });
    } else {
      setFilteredAlbums(albums);
    }
  };

  const handleAddEditAlbum = (album) => {
    if (album.id) {
      updateAlbum(album.id, album.title).then(updatedAlbum => {
        setAlbums(albums.map(a => a.id === updatedAlbum.id ? updatedAlbum : a));
        setFilteredAlbums(filteredAlbums.map(a => a.id === updatedAlbum.id ? updatedAlbum : a));
      });
    } else {
      createAlbum(album.title, 1).then(newAlbum => {  // Assuming userId is 1 for new albums
        setAlbums([newAlbum, ...albums]);
        setFilteredAlbums([newAlbum, ...filteredAlbums]);
      });
    }
  };

  const handleDeleteAlbum = (albumId) => {
    deleteAlbum(albumId).then(() => {
      setAlbums(albums.filter(album => album.id !== albumId));
      setFilteredAlbums(filteredAlbums.filter(album => album.id !== albumId));
    });
  };

  const handleOpenModal = (album) => {
    setCurrentAlbum(album);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentAlbum(null);
  };

  const paginatedAlbums = filteredAlbums.slice((page - 1) * 20, page * 20);

  return (
    <Container>
      <Search onSearch={handleSearch} />
      <Typography paddingTop='15px' variant="h4" gutterBottom>
        Albums
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleOpenModal(null)}>
        Add Album
      </Button>
      <Grid container spacing={2}>
        {paginatedAlbums.map((album) => (
          <Grid item key={album.id} xs={12} sm={6} md={4}>
            <Album album={album} onClick={handleAlbumClick} onEdit={() => handleOpenModal(album)} onDelete={() => handleDeleteAlbum(album.id)} />
          </Grid>
        ))}
      </Grid>
      <Pagination count={Math.ceil(filteredAlbums.length / 20)} page={page} onChange={handlePageChange} />
      <AlbumModal open={modalOpen} onClose={handleCloseModal} onSave={handleAddEditAlbum} album={currentAlbum} />
    </Container>
  );
};

export default Albums;
