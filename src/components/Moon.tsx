import React from 'react'

export const Moon = ({ destinations, description }) => {
  return (
    <div className='border-b-2 border-slate-400 md:pb-14'>
        <p className='text-9xl tracking-[4px]'>{destinations}</p>
        <p>{description}</p>  
    </div>
  )
}
