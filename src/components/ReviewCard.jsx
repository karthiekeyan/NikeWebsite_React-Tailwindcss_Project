import React from 'react'
import { star } from '../assets/icons'


const ReviewCard = ({imgURL , customerName , rating, feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'/>
        <p className='text-center text-slate-gray mt-3 font-montserrat'>{feedback}</p>
        <div className='flex gap-2 my-2'>
            <img src={star}
            width={24}
            height={24}
            className='object-contain m-0 font-palanquin items-center' />
            <p className='text-slate-gray text-center flex'>({rating})</p>
        </div>
        <h3 className=' font-montserrat text-2xl font-bold'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard