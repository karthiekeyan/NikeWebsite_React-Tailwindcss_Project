import React from 'react'
import {star} from '../assets/icons'

const PopularProductCard = ({imgURL , name , price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img 
          src={imgURL}
          alt={name}
          className='w-[280px] h-[280]'
          />
          <div className='mt-8 flex justify-start gap-2.5'>
            <img src={star} alt='rating' width={24} height={24} />
            <p className='text-slate-gray'>(4.5)</p>
          </div>
          <div>
            <h3 className='mt-2 text-2xl leading-normal font-palanquin font-semibold '>{name}</h3>
            <p className='mt-2 font-semibold font-montserrat text-2xl text-coral-red leading-normal'>{price}</p>
          </div>
    </div>
  )
}

export default PopularProductCard