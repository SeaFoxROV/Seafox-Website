import React from 'react'
import { Wave } from './Wave'
import Image from 'next/image'


export default function Landing() {
  return (
    <section className='flex flex-row relative h-screen justify-between w-full' id='Home'>
      <div className='sm:pl-5 xsm:w-full mid:pl-20 sm:1/3 z-20 flex-1'>
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


      <div className='overflow-hidden h-screen flex items-center xsm:w-0 sm:w-2/3'>
        <div className='relative w-full h-full hidden sm:block'>
          <Image
            alt="Landing fish"
            src="/images/Pez.png"
            layout="fill"
            className='object-cover object-center'
          />
          <div className='absolute top-0 left-[-3px] w-1/2 h-full hidden sm:block'> 
            <Wave className="z-10 right-0 h-full flex" />
          </div>
        </div>
      </div>

    </section>
  )
}
