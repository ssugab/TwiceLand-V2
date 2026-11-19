import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainLayout from './components/Layouts/MainLayout';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Discography from './pages/Discography';

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/discography" element={<Discography />} />

      </Route>

    </Routes>
  )
}

export default App
