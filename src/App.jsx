import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Programmes from './pages/Programmes';
import Coachs from './pages/Coachs';
import Tarifs from './pages/Tarifs';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="programmes" element={<Programmes />} />
          <Route path="coachs" element={<Coachs />} />
          <Route path="tarifs" element={<Tarifs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
