import React from 'react'
import FeatureCard from './feature-card'
import { FeaturesType } from '@/app/types'



const Features = () => {
  return (
    <section className='relative '>
        {/* bg-shape */}
        <div className='bg-[#3189FA] h-[1200px] md:h-[800px] absolute w-full -z-10 top-72'></div>

        <div className='px-5 '>
            <h2 className={` text-3xl py-10`}>Our Main Features</h2>

            <div className={`flex flex-col md:flex-row gap-6 items-center justify-center md:justify-between flex-wrap`}>
            {features.map((item, index)=><FeatureCard key={index} {...item} />)}
            </div>

            <section className='flex flex-col md:flex-row justify-around mt-10 md:mt-60'>
            <div className='basis-full md:basis-5/12 flex justify-center md:justify-start items-start  gap-6'>
                <div className='hidden flex flex-col gap-4'>
                <img src='/images/Frame 372.png' />
                <img src='/images/Rectangle 99.png' />
                </div>

                <div className='flex flex-col justify-center items-center '>
                <img src='/images/Rectangle 98.png' />

                <div className='p-4'>
                    <img src='/images/Group 97.png' />

                    <div className='mt-10 block m-auto w-56 '>
                    <img src='/images/Group 43.png' />
                    <p><span className='font-bold'>15K</span> <span className='text-blue'>+ Positive Reviews</span></p>
                    </div>
                </div>
                </div>
            </div>
            
            <div className='basis-5/12 text-black'>
                <div>
                <span className='t text-2xl font-thin'>WHO WE ARE</span>
                <h2 className='text-4xl f font-thin'>We are Offering The Best Real Esate Property For All</h2>
                <p className={`text-base leading-5 mt-10`}>
                    Homely is reimagining real estate to make it easier to unlock life’s next chapter.
                    As the most-visited real estate website in the United States, Zillow and its affiliates offer
                    customers an on-demand experience for selling, buying, renting and financing with transparency 
                    and nearly seamless end-to-end service. Zillow Home Loans, our affiliate lender, provides our 
                    customers with an easy option to get pre-approved and secure financing for their next home purchase.
                </p>
                </div>

                <div className=' flex flex-col gap-8 text-black mt-14'>
                <div className='flex flex-wrap justify-between'>
                    <div className='flex gap-4'>
                    <div className='bg-white p-2 rounded-lg border-solid border-2 border-blue'>
                        <img src="/images/Group 2.png" />
                    </div>

                    <div>
                        <h3 className='font-bold text-4xl'>55K</h3>
                        <p className='font-medium'>satisfied people!</p>
                    </div>
                    </div>
                    
                    <div className='flex gap-4'>
                    <div className='bg-white p-2 rounded-lg border-solid border-2 border-blue'>
                        <img src="/images/Mask Group.png" />
                    </div>

                    <div>
                        <h3 className='font-bold text-4xl'>11K</h3>
                        <p className='font-medium' >Verified Properties</p>
                    </div>
                    </div>
                </div>
                
                <button className='text-white mr-auto block bg-blue p-2 rounded-lg'>Contact With US</button>
                </div>
            </div>
            </section>
        </div>
        </section>
  )
}

export const features:FeaturesType[] = [
    {
        id: 1,
        img: "/images/buy_image.png",
        lead: "Buy",
        sub: "Find your place with an immersive photo exprience and the msit listings, including things you won’t find else where.",
        action: "Browse Homes"
    },
    {
        id: 2,
        img: "/images/rent_image.png",
        lead: "Rent",
        sub: "Discover a place that checks all your boxes. Filter your rental search, and find exactly whta you’re looking for.",
        action: "Find Rentals"

    },
    {
        id: 3,
        img: "/images/share_rent_image.png",
        lead: "Share",
        sub: "Having issues getting a flatmate ? ,  dont worry ,  our shared feature gives you the ability to search for your potential flatmate with ease.",
        action: "Share a Rent"
    }
]

export default Features
