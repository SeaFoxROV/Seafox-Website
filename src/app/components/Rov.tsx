import React from 'react'
import Image from 'next/image'

export default function Rov() {
  return (
    <section className='h-screen flex flex-row justify-between relative' id='About'>

      <div className='ml-10 z-30 flex flex-col justify-center h-full w-2/3 mid:w-1/3 p-5'>
          <div className="flex flex-row">
            <h1 className='font-bebas text-white text-3xl mid:text-5xl'>
              WHERE&nbsp;
            </h1>
            <h1 className='font-bebas text-primary text-3xl mid:text-5xl'>
              SCIENCE
            </h1>
          </div>

          <p className='font-roboto font-light xsm:text-base sm:text-base mid:text-2xl'>
            delves into mysteries of our oceans, it intertwines with imagination. At this juncture, boundaries blur and innovation
          </p>
          <div className='flex flex-row'>
            <h1 className='font-bebas text-3xl mid:text-5xl'>
                MEETS CREATIVITY.
            </h1>
          </div>
      </div>

     <div className='z-30 sm:w-1/3 p-5 pb-24'>
        <div className='flex flex-row justify-center items-end align-middle h-full '>
          <h2 className='font-bebas text-3xl mid:text-5xl'>
            ROV&nbsp;
          </h2>
          <h2 className='font-bebas text-primary text-3xl mid:text-5xl'>
            2019
          </h2>
        </div>
      </div> 

      <div className='absolute  w-full h-full top-0'>
        <Image
          alt="Rov 2019"
          src="/images/ROV_2019.png"
          layout="fill"
          className='object-cover object-center'
        /> 
        <div className='relative w-full h-full'>
          <div className='absolute top-0 w-full h-full z-20 inset-0 bg-gradient-to-r from-[rgb(0,0,0)] via-[rgba(0,0,0,0)] to-transparent'></div>
          <div className='absolute top-0 w-full h-full z-20 inset-0 bg-gradient-to-r from-transparent via-[rgba(0,0,0,0)] to-[rgb(0,0,0)]'></div>
        </div>
      </div>

    </section>
  )
}
