import React from 'react'
import { Wave } from './Wave'
import Image from 'next/image'


export default function Landing() {
  return (
    <div className='flex flex-row relative'>
      <div className='ml-20 w-1/3 z-20'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='font-bebas text-7xl ml-5'>
            THE
          </h2>
          <h1 className='font-bebas text-primary text-9xl'>
            OCEAN
          </h1>
          <h2 className='font-bebas text-7xl ml-5'>IS CALLING</h2>
        </div>
      </div>
      <div className='absolute top-0 left-[0%] w-1/2 h-full'> 
        <Wave className="z-10 left-[100px] h-full flex relative" />
      </div>

       <div className='overflow-hidden'>
        <Image
          width={300}
          height={300}
          alt="NextUI hero Image"
          src="/images/Pez.png"
          layout="responsive"
          className='left-0'
        />
      </div>
    </div>
  )
}
