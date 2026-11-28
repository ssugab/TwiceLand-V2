import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout';
import TwiceLoader from './components/TwiceLoader';

import NotFound from './pages/NotFound';

const HomePage = lazy(() => import('./pages/HomePage'));
const Discography = lazy(() => import('./pages/Discography'));
const News = lazy(() => import('./pages/News'));
const MemberDetail = lazy(() => import('./pages/Profile'));

function App() {
  return (
    <Suspense fallback={<TwiceLoader fullScreen text="Entering Twiceland..." />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={<MemberDetail />} />
          <Route path="/profile/:slug" element={<MemberDetail />} />
        </Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
