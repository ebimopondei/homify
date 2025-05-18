import React from 'react'
import FeatureCard from './feature-card'
import { FeaturesType } from '@/types'
import Image from 'next/image'
import { Button } from './ui/button'



const Features = () => {
  return (
    <section className='relative '>
        {/* bg-shape */}
        <div className='bg-[#3189FA] h-[1300px] md:h-[850px] absolute w-full -z-10 top-72'></div>

        <div className='px-5 '>
            <h2 className={` text-3xl py-10`}>Our Main Features</h2>

            <div className={`flex flex-col md:flex-row gap-6 items-center justify-center md:justify-between flex-wrap`}>
            {features.map((item, index)=><FeatureCard key={index} {...item} />)}
            </div>

            <section className='flex flex-col md:flex-row justify-around mt-10 md:mt-60'>
            <div className='basis-full md:basis-5/12 flex justify-center md:justify-start items-start  gap-6'>
                <div className='hidden md:flex flex-col gap-4'>
                    <div className="relative w-80 h-96">
                        <Image
                            src='/images/Frame 372.png'
                            alt=""
                            fill
                            className="object-fill"
                        />
                    </div>
                    <div className="relative w-80 h-63">
                        <Image
                            src='/images/Rectangle 99.png'
                            alt=""
                            fill
                            className="object-fill"
                        />
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center md:mt-15'>
                    <div className="relative w-80 h-96">
                        <Image
                            src='/images/Rectangle 98.png'
                            alt=""
                            fill
                            className="object-fill"
                        />
                    </div>

                    <div className='p-4'>
                        <div className="relative w-14 h-14 ">
                            <Image
                                src='/images/Group 97.png'
                                alt=""
                                fill
                                className="object-fill"
                            />
                        </div>

                        <div className='mt-10 block m-auto w-56 '>
                            <div className="relative w-full h-14 ">
                                <Image
                                    src='/images/Group 43.png'
                                    alt=""
                                    fill
                                    className="object-fill"
                                />
                            </div>
                        <p><span className='font-bold'>15K</span> <span className='text-blue'>+ Positive Reviews</span></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='basis-5/12 md:text-white'>
                <div className='text-left'>
                <span className='text-lg md:text-2xl font-thin'>WHO WE ARE</span>
                <h2 className='text-2xl md:text-4xl font-semibold'>We are Offering The Best Real Esate Property For All</h2>
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
                    <div className='bg-white p-2 rounded-lg border-solid border-3 border-blue-2000'>

                        <div className="relative w-10 h-10">
                            <Image
                                src="/images/Group 2.png"
                                alt=""
                                fill
                                className="object-fill"
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className='font-bold text-4xl'>55K</h3>
                        <p className='font-medium'>satisfied people!</p>
                    </div>
                    </div>
                    
                    <div className='flex gap-4'>
                    <div className='bg-white p-2 rounded-lg border-solid border-3 border-blue-2000'>
                        <div className="relative w-11 h-11">
                            <Image
                                src="/images/Mask Group.png"
                                alt=""
                                fill
                                className="object-fill"
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className='font-bold text-4xl'>11K</h3>
                        <p className='font-medium' >Verified Properties</p>
                    </div>
                    </div>
                </div>
                
                <Button className='w-40 py-6 rounded-lg'>Contact With US</Button>
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
