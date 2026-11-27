import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout';
import HomePage from './pages/HomePage';
import Discography from './pages/Discography';
import News from './pages/News';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/discography" element={<Discography />} />
        <Route path="/news" element={<News />} />
      </Route>

      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
