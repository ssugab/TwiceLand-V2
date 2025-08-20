import React from 'react'
import Hero from '../components/Hero'
import LatestComeback from '../components/LatestUpdates'
import Members from '../components/MembersSection'

const HomePage = () => {
  return (
    <div className='min-h-screen'>

      <Hero />
      <LatestComeback />
      <Members />

    </div>
  )
}

export default HomePage