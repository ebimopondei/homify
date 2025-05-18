import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';

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
        <div className="relative w-full h-55 md:h-69">
          <Image
            src={item.img}
            alt=""
            fill
            className="object-fill"
          />
        </div>
        <div className='p-4'>
            <h3 className='text-center font-medium'>{item.lead}</h3>
            <p className='text-xs text-left my-3'>{item.sub}</p>
            <Button className='mt- mb-3 '>{item.action}</Button>
        </div>
    </div>
  )
}

export default FeatureCard
