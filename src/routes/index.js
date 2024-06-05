import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Albums from '../components/Albums';
import AlbumDetail from '../components/AlbumDetail';
import PhotoDetail from '../components/PhotoDetail';
import Search from '../components/Search';
import RecentlyViewed from '../components/RecentlyViewed';
import HomePage from '../components/HomePage';
import Navbar from '../components/Navbar';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/album/:id" element={<AlbumDetail />} />
        <Route path="/photo/:id" element={<PhotoDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recently-viewed" element={<RecentlyViewed />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
