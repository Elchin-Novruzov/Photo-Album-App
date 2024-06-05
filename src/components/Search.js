import React, { useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Container>
      <Box display="flex" alignItems="center" paddingTop="15px">
        <TextField
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search albums or photos"
          variant="outlined"
        />
        <Button onClick={handleSearch} variant="contained" color="primary" style={{ marginLeft: '10px', padding: '15px' }}>
          Search
        </Button>
      </Box>
    </Container>
  );
};

export default Search;
