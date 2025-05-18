import { OffersType } from '@/types'
import OfferItem from '@/components/offer-item'
import React from 'react'

const Offers = () => {
  return (
    <section  className='md:mx-8 md:my-16'>
        <div className='flex justify-between items-center my-10'>
            <h2 className='text-5xl font-light '>Top Offers</h2>
            <a href='#' className='underline'>view all</a>
        </div>

        <div className={`flex flex-col  md:flex-row md:gap-10 text-xs items-center justify-center `}>
            {offers.map((item, index)=><OfferItem key={index} {...item} />)}
        </div>
    </section>
  )
}

export const offers:OffersType[] = [
    {
        id: 1,
        status: "Verified",
        img: "/images/offer_image.png",
        alt: "view of the house",
        title: "Grand Two Bedroom Mansion",
        price: "#45,000,000",
        location: "Lekki, Lagos",
        description: "2 Bedroom flat, with 3 bathroom in a 102 sqm, All fenced in a good environment with good roads.",
        owner: "Jonnuel Housing Int.",
    },
    {
        id: 2,
        status: "Verified",
        img: "/images/offer_image.png",
        alt: "view of the house",
        title: "Grand Two Bedroom Mansion",
        price: "#45,000,000",
        location: "Lekki, Lagos",
        description: "2 Bedroom flat, with 3 bathroom in a 102 sqm, All fenced in a good environment with good roads.",
        owner: "Jonnuel Housing Int.",
    },
    {
        id: 1,
        status: "Verified",
        img: "/images/offer_image.png",
        alt: "view of the house",
        title: "Grand Two Bedroom Mansion",
        price: "#45,000,000",
        location: "Lekki, Lagos",
        description: "2 Bedroom flat, with 3 bathroom in a 102 sqm, All fenced in a good environment with good roads.",
        owner: "Jonnuel Housing Int.",
    }
]

export default Offers
