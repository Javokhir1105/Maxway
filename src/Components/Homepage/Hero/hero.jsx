import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import rasm1 from '../../../assets/lavash.png'
import rasm2 from '../../../assets/gamburger.png'
import rasm3 from '../../../assets/xotdog.png'


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';


import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Hero() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        
      >
        <SwiperSlide>
          <img src={rasm1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm2}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm1} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={rasm1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm3}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rasm3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
