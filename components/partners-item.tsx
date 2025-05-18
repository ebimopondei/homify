import { PartnerType } from '@/types'
import React from 'react'

const Partner = (item: PartnerType) => {
  return (
    <div className='px-10 py-16 flex gap-20  flex-col h-[550px] bg-white'>
        <h2 className='text-5xl '>{item.lead}</h2>
        <p className='text-justify'>{item.sub}</p>
        <a href='#'>
            <span>{item.cta}</span>
        </a>
    </div>
  )
}

export default Partner
