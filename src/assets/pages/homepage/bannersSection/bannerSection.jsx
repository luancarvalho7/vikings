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
                <SwiperSlide><img src="https://i.postimg.cc/1zRXXtTb/demo-ban01.png" alt="" onClick={() => { }} /></SwiperSlide>
                <SwiperSlide><img src="https://i.postimg.cc/4dm3v0X5/demo-ban02.png" alt="" style={{ cursor: "pointer" }}
                    onClick={() => { window.open("https://www.instagram.com/vinicim_bf/") }} /></SwiperSlide>
                <SwiperSlide><img src="https://i.postimg.cc/ZR25wLRh/demo-ban-VIP.png" alt="" style={{ cursor: "pointer" }}
                    onClick={() => { window.open("https://www.instagram.com/vinicim_bf/", "_blank")
                    }} /></SwiperSlide>
            </Swiper>
        </>
    );
}