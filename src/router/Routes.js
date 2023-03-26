import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../page/Home';
import Readed from '../page/Readed';
import ToRead from '../page/ToRead';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/readed" element={<Readed />} />
      <Route path="/toread" element={<ToRead />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default AppRoutes;
