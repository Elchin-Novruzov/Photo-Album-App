import React, { useState, useEffect } from 'react';
import AppRoutes from './routes';
import { getAlbums } from './services/api';
import VirtualScroll from './utils/VirtualScroll';
import Album from './components/Album';

const App = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums().then(setAlbums);
  }, []);

  return (
    <div>
      <AppRoutes />
      {/* <VirtualScroll
        items={albums}
        renderItem={(album) => album && <Album key={album.id} album={album} onClick={(id) => {}} />}
        itemHeight={100}
      /> */}
    </div>
  );
};

export default App;
