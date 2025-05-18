import React from 'react'
import Image from 'next/image'

const OurStory = () => {
  return (
    <section className={`flex flex-col p-5 md:flex-row flex-wrap gap-10 justify-around md:py-40 md:px-20 bg-[#E4E8E9]`}>
        <div className='basis-5/12 '>
            <h2 className='text-5xl '>Our Story <br /> Who We Are</h2>

            <p className='mt-10 leading-6'>Established in 1992, PT. Wahana Cipta operates as a General Contracting
                company with a footprint that we have planted throughout Indonesia. Initially,
            we focused on construction in the field of residential housing development in Jakarta. 
            As the company grows, now we are present as a reliable...
            </p>

            <button className='bg-blue text-white p-2 mt-6 rounded-lg'>Explore All</button>
        </div>

        <div className='basis-5/12'>
            <Image src="/images/our_story_image.png" alt="our_story" width={670} height={582} />
        </div>

        <div className='basis-full'>
            <section className='flex flex-col md:flex-row p-3 gap-10 justify-around items-center md:mx-20 bg-[#3189FA] text-white'>
            <div className='basis-full md:basis-3/12'>
                <div className="relative min-w-[193px] min-h-[257px] md:h-69">
                    <Image
                        src="/images/man.png"
                        alt="man"
                        fill
                        className="object-fill"
                    />
                </div>

            </div>
            <div className='basis-6/12 flex flex-col gap-6 justify-center items-start'>
                <h2 className='text-4xl'>Become Our Agent</h2>
                <p className='text-lg'>We are here to help you get the right clients and tenets for your properties, ensure swift payment of rents and maintainance when needed.</p>
                <button className='bg-white text-black p-2 rounded-lg'>Explore All</button>
            </div>
            </section>
        </div>
    </section>
  )
}

export default OurStory
