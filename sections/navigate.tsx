import React from 'react'

const Navigate = () => {
  return (
    <section className="p-10">
        <h2 className='text-5xl text-center m-6'>How to Navigate</h2>
        <video className='block m-auto' width="600px" height='600px' controls>
            <source src='/videos/temp_vid.mp4'  type='video/mp4'></source>
            Your browser does not support the video tag
        </video>
    </section>
  )
}

export default Navigate
