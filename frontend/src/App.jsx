import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainLayout from './components/Layouts/MainLayout';
import HomePage from './pages/HomePage';

function App() {

  return (
    <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />

        </Route>
    </Routes>
  )
}

export default App
