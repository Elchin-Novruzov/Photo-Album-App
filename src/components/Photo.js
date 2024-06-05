import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea, Dialog, DialogContent, IconButton, CardActions } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Photo = ({ photo, onDelete, onEdit }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia component="img" height="140" image={photo.thumbnailUrl} alt={photo.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {photo.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton onClick={onEdit} color="primary">
          <EditIcon />
        </IconButton>
        <IconButton onClick={onDelete} color="secondary">
          <DeleteIcon />
        </IconButton>
      </CardActions>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          <img src={photo.url} alt={photo.title} style={{ width: '100%' }} />
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default Photo;
