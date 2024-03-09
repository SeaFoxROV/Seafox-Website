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
            src="/integrantes/aide_sandoval.png"
            width={300}
            height={300}
            className=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Anahí Hull"
            src="/integrantes/Anahí Hull.png"
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
            src="/images/integrantes/Carolina Flores.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Cesar Ahumada"
            src="/images/integrantes/Cesar Ahumada.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Chantal Mendoza"
            src="/images/integrantes/Chantal Mendoza.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Claudio Lopez"
            src="/images/integrantes/Claudio Lopez.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Daira Razo"
            src="/images/integrantes/Daira Razo.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Davi Bustamante"
            src="/images/integrantes/David Bustamante.png"
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Joshua Ibarra"
            src="/images/integrantes/Joshua Ibarra.png"
            width={300}
            height={300}
          />
        </SwiperSlide>        
        <SwiperSlide>
          <Image
            alt="Kevin Payan"
            src="/images/integrantes/Kevin Payan.png"
            width={300}
            height={300}
          />
        </SwiperSlide>  
        <SwiperSlide>
          <Image
            alt="Lorenzo Villalobos"
            src="/images/integrantes/Lorenzo Villalobos.png"
            width={300}
            height={300}
          />
        </SwiperSlide> 
        <SwiperSlide>
          <Image
            alt="Luis Solis"
            src="/images/integrantes/Luis Solis.png"
            width={300}
            height={300}
          />
        </SwiperSlide> 
        <SwiperSlide>
          <Image
            alt="Mariana Vega"
            src="/images/integrantes/Mariana Vega.png"
            width={300}
            height={300}
          />
        </SwiperSlide>  
        <SwiperSlide>
          <Image
            alt="Mario Alcaraz"
            src="/images/integrantes/Mario Alcaraz.png"
            width={300}
            height={300}
          />
        </SwiperSlide>   
        <SwiperSlide>
          <Image
            alt="Oscar Mendivil"
            src="/images/integrantes/Oscar Mendivil.png"
            width={300}
            height={300}
          />
        </SwiperSlide>  
        <SwiperSlide>
          <Image
            alt="Pedro Monge"
            src="/images/integrantes/Pedro Monge.png"
            width={300}
            height={300}
          />
        </SwiperSlide>   
        <SwiperSlide>
          <Image
            alt="Raúl Gallareta"
            src="/images/integrantes/Raúl Gallareta.png"
            width={300}
            height={300}
          />
        </SwiperSlide>  
        <SwiperSlide>
          <Image
            alt="Samuel Tirado"
            src="/images/integrantes/Samuel Tirado.png"
            width={300}
            height={300}
          />
        </SwiperSlide>  
        <SwiperSlide>
          <Image
            alt="San Felipe"
            src="/images/integrantes/San Felipe.png"
            width={300}
            height={300}
          />
        </SwiperSlide>  
        <SwiperSlide>
          <Image
            alt="Sebastián Gonzáles"
            src="/images/integrantes/Sebastián Gonzáles.png"
            width={300}
            height={300}
          />
        </SwiperSlide>  
        <SwiperSlide>
          <Image
            alt="Sergio Lachica"
            src="/images/integrantes/Sergio Lachica.png"
            width={300}
            height={300}
          />
        </SwiperSlide>  
        <SwiperSlide>
          <Image
            alt="Valeria Ibarra"
            src="/images/integrantes/Valeria Ibarra.png"
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
