import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './bannerSection.css'

// import required modules
import { Autoplay } from 'swiper/modules';

export function BannerSection() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="bannerSwiper"
            >
                <SwiperSlide><img src="https://i.postimg.cc/8CfKmRpc/2k.png" alt="" onClick={() => { }} /></SwiperSlide>
                <SwiperSlide><img src="https://i.postimg.cc/ZnHV5jc7/Community.png" alt="" style={{ cursor: "pointer" }}
                    onClick={() => { window.open("https://chat.whatsapp.com/JlCxZ8nndvS5mb2QuTmS5L") }} /></SwiperSlide>
            </Swiper>
        </>
    );
}