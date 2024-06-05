import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const PhotoModal = ({ open, onClose, onSave, photo }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  useEffect(() => {
    if (photo) {
      setTitle(photo.title);
      setUrl(photo.url);
      setThumbnailUrl(photo.thumbnailUrl);
    } else {
      setTitle('');
      setUrl('');
      setThumbnailUrl('');
    }
  }, [photo]);

  const handleSave = () => {
    onSave({ ...photo, title, url, thumbnailUrl });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{photo ? 'Edit Photo' : 'Add Photo'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Photo Title"
          type="text"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Photo URL"
          type="text"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Thumbnail URL"
          type="text"
          fullWidth
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={handleSave} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PhotoModal;
