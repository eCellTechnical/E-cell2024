
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Application from './Application';
import Submitted from './Submitted';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Application />} />
        <Route path="/submitted" element={<Submitted />} />
      </Routes>
    </BrowserRouter>
  );
}
