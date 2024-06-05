import React from 'react';
import { Card, CardContent, Typography, CardActionArea, IconButton, CardActions } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Album = ({ album, onClick, onEdit, onDelete }) => {
  if (!album) {
    return null;
  }

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea onClick={() => onClick(album.id)}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {album.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Created by User ID: {album.userId}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Album ID: {album.id}
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
    </Card>
  );
};

export default Album;
