import React from 'react'
import { Star } from 'lucide-react';
function Card({ Data }) {

    return (
        <>
            {
                Data.map((v, i) => {
                    return (
                        <div key={i}>  <div className='w-full cursor-pointer'>
                            <div className='w-full h-4/5'>
                                <img className='w-full h-full object-cover' src={v.productImg} alt={v.title} />
                            </div>
                            <div className='px-3 py-5  flex flex-col gap-3'>
                                <h3 className='text-xl pt-4'>{v.title} </h3>
                                <div className='flex justify-between'>
                                    <div className='flex gap-2' ><h5>₹ {v.price}</h5> <span className='line-through text-l'>₹ {v.mrp}</span></div>
                                    <div className='flex items-center gap-1 pe-3'><Star size={16} /> <span> {v.review}</span></div>
                                </div>
                            </div>
                        </div></div>
                    )
                })
            }


        </>
    )
}

export default Card
