"use client"
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import '@ionic/react/css/core.css';
import { IonIcon, setupIonicReact } from '@ionic/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

setupIonicReact();

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import './Carousel.css'; // Add your custom styling

export default function Team() {
  return (
    <section className='h-screen pt-20' id='Team'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-row'>
          <h1 className='font-bebas text-3xl mid:text-5xl text-primary'>INNOVATIVE&nbsp;</h1>
          <h1  className='font-bebas text-3xl mid:text-5xl'>BY NATURE,</h1>
        </div>
        <div className='flex flex-row'>
          <h1 className='font-bebas text-3xl mid:text-7xl'>ROBOTICS&nbsp;</h1> 
          <h1 className='font-bebas text-3xl mid:text-7xl text-primary'>BY CHOICE.</h1>
        </div>
        {/* <Image
            alt="Person 1"
            src="/images/person.png"
            width={200}
            height={200}
            className='bg-blue-500 justify-center self-center'
            style={{ display: 'flex' }}
          /> */}
      </div>
      <Carousell></Carousell>
    </section>
  )
}


function Carousell() {
  const [slidesPerView, setSlidesPerView] = React.useState(1);


  React.useEffect(() => {
    const calculateSlidesPerView = () => {
      // Calculate the number of slides based on the desired width (e.g., 300 pixels)
      const desiredSlideWidth = 350;
      const calculatedSlidesPerView = Math.floor(window.innerWidth / desiredSlideWidth);
      setSlidesPerView(calculatedSlidesPerView || 1); // Ensure it's at least 1 slide
    };
    calculateSlidesPerView();
    window.addEventListener('resize', calculateSlidesPerView);
    return () => {
      window.removeEventListener('resize', calculateSlidesPerView);
    };
  }, []);
  console.log(slidesPerView);
  return (
      <div className="flex p-10">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
      <SwiperSlide>
          <Image
            alt="Person 1"
            src="/images/person.png"
            width={300}
            height={300}
            className=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Person 2"
            src="/images/person2.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Person 3"
            src="/images/person3.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
         <SwiperSlide>
          <Image
            alt="Person 1"
            src="/images/person.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Person 2"
            src="/images/person2.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Person 3"
            src="/images/person3.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Person 1"
            src="/images/person.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Person 2"
            src="/images/person2.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Person 3"
            src="/images/person3.png"
            width={300}
            height={300}
          />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
          </div>
          <div className="swiper-button-next slider-arrow h-1 w-2">
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
