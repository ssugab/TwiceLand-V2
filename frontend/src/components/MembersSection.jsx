import React from 'react'

const MembersSection = () => {
  return (
    <section>
      <div className='w-full h-full max-w-6xl mx-auto px-4'>
        <div className='w-2/4 h-1/10 bg-matteblack'></div>
        <h2 className='text-4xl font-title text-matteblack'>Meet The Members</h2>
        <p className='mt-2 text-sm md:text-base text-offwhite/90 font-display-bold'>
          Get to know the talented individuals behind TWICE
        </p>

        <div>
          <h3 className='text-2xl font-title text-matteblack'>Member Name</h3>
          <p className='mt-1 text-sm md:text-base text-offwhite/90 font-display-bold'>
            Member description goes here.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MembersSection