import React from 'react'
import Hero from '../components/Hero'
import LatestComeback from '../components/LatestComeback'
import LatestUpdate from '../components/LatestUpdate'
import Members from '../components/MembersSection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='min-h-screen'>

      <Hero />
      <LatestComeback />
      <LatestUpdate />
      <Members />
      <Footer />

    </div>
  )
}

export default HomePage
