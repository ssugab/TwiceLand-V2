import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar'
//import Footer from '../Footer'

const MainLayout = () => {
  return (
    <div className='bg-accent min-h-screen p-2'>
      <div className='bg-accent2 min-h-full rounded-4xl shadow-lg relative overflow-hidden'>
        <Navbar />
        <main>
          {/* Content goes here */}
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default MainLayout;