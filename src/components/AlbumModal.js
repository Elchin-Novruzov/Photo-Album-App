import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const AlbumModal = ({ open, onClose, onSave, album }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (album) {
      setTitle(album.title);
    } else {
      setTitle('');
    }
  }, [album]);

  const handleSave = () => {
    onSave({ ...album, title });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{album ? 'Edit Album' : 'Add Album'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Album Title"
          type="text"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={handleSave} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlbumModal;
