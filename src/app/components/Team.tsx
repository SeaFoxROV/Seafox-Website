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
            alt="Aide Sandoval"
            src="/images/aide_sandoval.png"
            width={300}
            height={300}
            className=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Anahí Hull"
            src="/integrantes/anahí_Hull.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Brandon Herrera"
            src="/integrantes/Brandon Herrera.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
         <SwiperSlide>
          <Image
            alt="Carolina Flores"
            src="/integrantes/Carolina Flores.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Cesar Ahumada"
            src="/integrantes/Cesar Ahumada.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Chantal Mendoza"
            src="/integrantes/Chantal Mendoza.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Claudio Lopez"
            src="/integrantes/Claudio Lopez.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Daira Razo"
            src="/integrantes/Daira Razo.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Davi Bustamante"
            src="/integrantes/David Bustamante.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Joshua Ibarra"
            src="/integrantes/Joshua Ibarra.png"
            width={300}
            height={300}
          />
        </SwiperSlide>        
        <SwiperSlide>
          <Image
            alt="Kevin Payan"
            src="/integrantes/Kevin Payan.png"
            width={300}
            height={300}
          />
        </SwiperSlide>  
        <SwiperSlide>
          <Image
            alt="Lorenzo Villalobos"
            src="/integrantes/Lorenzo Villalobos.png"
            width={300}
            height={300}
          />
        </SwiperSlide> 
        <SwiperSlide>
          <Image
            alt="Luis Solis"
            src="/integrantes/Luis Solis.png"
            width={300}
            height={300}
          />
        </SwiperSlide> 
        <SwiperSlide>
          <Image
            alt="Mariana Vega"
            src="/integrantes/Mariana Vega.png"
            width={300}
            height={300}
          />
        </SwiperSlide>  
        <SwiperSlide>
          <Image
            alt="Mario Alcaraz"
            src="/integrantes/Mario Alcaraz.png"
            width={300}
            height={300}
          />
        </SwiperSlide>   
        <SwiperSlide>
          <Image
            alt="Oscar Mendivil"
            src="/integrantes/Oscar Mendivil.png"
            width={300}
            height={300}
          />
        </SwiperSlide>  
        <SwiperSlide>
          <Image
            alt="Pedro Monge"
            src="/integrantes/Pedro Monge.png"
            width={300}
            height={300}
          />
        </SwiperSlide>   
        <SwiperSlide>
          <Image
            alt="Raúl Gallareta"
            src="/integrantes/Raúl Gallareta.png"
            width={300}
            height={300}
          />
        </SwiperSlide>  
        <SwiperSlide>
          <Image
            alt="Samuel Tirado"
            src="/integrantes/Samuel Tirado.png"
            width={300}
            height={300}
          />
        </SwiperSlide>  
        <SwiperSlide>
          <Image
            alt="San Felipe"
            src="/integrantes/San Felipe.png"
            width={300}
            height={300}
          />
        </SwiperSlide>  
        <SwiperSlide>
          <Image
            alt="Sebastián Gonzáles"
            src="/integrantes/Sebastián Gonzáles.png"
            width={300}
            height={300}
          />
        </SwiperSlide>  
        <SwiperSlide>
          <Image
            alt="Sergio Lachica"
            src="/integrantes/Sergio Lachica.png"
            width={300}
            height={300}
          />
        </SwiperSlide>  
        <SwiperSlide>
          <Image
            alt="Valeria Ibarra"
            src="/integrantes/Valeria Ibarra.png"
            width={300}
            height={300}
          />
        </SwiperSlide>  
        <SwiperSlide>
          <Image
            alt="??????"
            src="/images/integrantes/cb011d4b-e52c-4f6a-9f17-5e4a70c46278.png"
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
