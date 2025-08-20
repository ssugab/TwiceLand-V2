import React from 'react'
import Hero from '../components/Hero'
import LatestComeback from '../components/LatestComeback'
import LatestUpdate from '../components/LatestUpdate'
import Members from '../components/MembersSection'

const HomePage = () => {
  return (
    <div className='min-h-screen'>

      <Hero />
      <LatestComeback />
      <LatestUpdate />
      <Members />

    </div>
  )
}

export default HomePage