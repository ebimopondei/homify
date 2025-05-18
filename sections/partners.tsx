import React from 'react'
import { PartnerType } from '@/types'
import Partner from '@/components/partners-item'

const Partners = () => {
  return (
    <section className='-mx-4 bg-cover bg-[url("/images/partner_bg.png")] '>
        <div className='h-[832px]s p-5 md:p-10'>
            <h2 className='text-5xl text-white'>Our Partners</h2>

            <div className='flex flex-col md:flex-row justify-center gap-10 my-10  '>
            {partnersList.map((partner, index)=><Partner key={index} {...partner} />)}
            </div>

        </div>
    </section>
  )
}

export default Partners


export const partnersList:PartnerType[] = [
    {
        lead: "Developers",
        sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit malesuada nunc netus vel morbi sagittis.",
        cta: "Explore Property Developers",
    },
    {
        lead: "Real Estate Agencies",
        sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit malesuada nunc netus vel morbi sagittis.",
        cta: "Explore Real Estate Agencies",
    },
    {
        lead: "Properties owners",
        sub: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit malesuada nunc netus vel morbi sagittis.",
        cta: "Explore Properties owners",
    },
]