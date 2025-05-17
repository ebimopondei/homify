import { OffersType } from '@/app/types'
import React from 'react'

function OfferItem(item:OffersType) {
  return (
    <div className={`p-4 bg-lightBlue basis-2/6 rounded-lg`}>
        <div className='relative'>
            <span className='p-2 text-white rounded-lg absolute top-2 left-2 bg-green '>{item.status}</span>
            <img className='cover ' src={item.img} />
        </div>

        <p className='font-bold my-2'>{item.title}</p>
        <p className='font-bold flex items-center gap-2'> <img src='images/price tag.png' width={25} />{item.price}</p>
        <p className='flex items-center gap-2'><img src='images/address.png' width={25} />{item.location}</p>
        <p className='font-bold my-2'>Property Description</p>
        <p>{item.description}</p>
        <p className='flex items-center gap-2 my-2'><img src='images/broker.png' width={25} />{item.owner}</p>
    </div>
  )
}

export default OfferItem