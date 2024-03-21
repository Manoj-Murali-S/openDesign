import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';


const Amentities = () => {
  return (
    <div className="apartmentB">
      <div className="container">
        <div className="appH faqgradient">Key amenities</div>
        <div className="appP faqgradient">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora toria nostra, per inceptos himenaeos.  </div>

        <Swiper navigation={true}
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          loop={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="insideSS">
              <img src="assets/Frame1-2.png" alt="" className='amentitiesImg' srcSet="" />
              <p className='amentitiesP'>Indoor games</p>
            </div>
          </SwiperSlide>
          <SwiperSlide> <div className="insideSS">
            <img src="assets/Frame1-3.png" alt="" className='amentitiesImg' srcSet="" />
            <p className='amentitiesP'>Gym</p>
          </div>
          </SwiperSlide>
          <SwiperSlide> <div className="insideSS">
            <img src="assets/Frame1-4.png" alt="" className='amentitiesImg' srcSet="" />
            <p className='amentitiesP'>Banquet hall</p>
          </div>
          </SwiperSlide>
          <SwiperSlide> <div className="insideSS">
            <img src="assets/Frame1-2.png" alt="" className='amentitiesImg' srcSet="" />
            <p className='amentitiesP'>Indoor games 2</p>
          </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default Amentities;