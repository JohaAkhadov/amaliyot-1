import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, A11y } from 'swiper/modules';

function Slider() {
  return (
    <div className='slider'>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src="./img/Property 1=Default (1).png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/Property 1=Variant2 (1).png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/Property 1=Default (1).png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/Property 1=Variant2 (1).png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider