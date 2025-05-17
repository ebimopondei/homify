import Image from 'next/image';
import React from 'react'

interface features {
    id: number;
    img: string;
    lead: string;
    sub: string;
    action: string;
}

const FeatureCard = (item: features) => {
  return (
    <div className='basis-3/12 bg-white rounded-lg max-w-[374px]'>
        <Image  src={item.img} alt="text"  />

        <div className='p-4'>
            <h3 className='text-center font-medium'>{item.lead}</h3>
            <p className='text-xs text-justify'>{item.sub}</p>
            <button className=' rounded-md mt-6 block m-auto bg-blue text-white px-4 py-2 '>{item.action}</button>
        </div>
    </div>
  )
}

export default FeatureCard
