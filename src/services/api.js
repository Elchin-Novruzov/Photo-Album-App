import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

// Get all albums
export const getAlbums = async () => {
  const response = await axios.get(`${API_URL}/albums`);
  return response.data;
};

// Get photos for a specific album
export const getAlbumPhotos = async (albumId) => {
  const response = await axios.get(`${API_URL}/albums/${albumId}/photos`);
  return response.data;
};

// Get a specific photo
export const getPhoto = async (photoId) => {
  const response = await axios.get(`${API_URL}/photos/${photoId}`);
  return response.data;
};

// Search for albums and photos
export const searchItems = async (query) => {
  const [albums, photos] = await Promise.all([
    axios.get(`${API_URL}/albums`, { params: { title_like: query } }),
    axios.get(`${API_URL}/photos`, { params: { title_like: query } }),
  ]);
  return { albums: albums.data, photos: photos.data };
};

// Create a new album
export const createAlbum = async (title, userId) => {
  const response = await axios.post(`${API_URL}/albums`, {
    title,
    userId,
  });
  return response.data;
};

// Update an existing album
export const updateAlbum = async (albumId, title) => {
  const response = await axios.put(`${API_URL}/albums/${albumId}`, {
    id: albumId,
    title,
  });
  return response.data;
};

// Delete an existing album
export const deleteAlbum = async (albumId) => {
  await axios.delete(`${API_URL}/albums/${albumId}`);
};

// Add a new photo to an album
export const addPhotoToAlbum = async (albumId, photoData) => {
  const response = await axios.post(`${API_URL}/albums/${albumId}/photos`, photoData);
  return response.data;
};

// Update an existing photo
export const updatePhoto = async (photoId, photoData) => {
  const response = await axios.put(`${API_URL}/photos/${photoId}`, photoData);
  return response.data;
};

// Remove a photo from an album
export const removePhotoFromAlbum = async (photoId) => {
  await axios.delete(`${API_URL}/photos/${photoId}`);
};
