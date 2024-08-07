import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/styles.css';
import { Navigation, Autoplay } from 'swiper/modules';
import type React from 'react';

export default function App({ sliders }: any) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="project_sliders"
      >
        {
            sliders?.map((item: any, i: React.Key) => (
                <SwiperSlide key={i}>
                  <div className='w-[350px] h-[300px] scale-100'>
                    <img src={item?.url} className='w-full h-full rounded-2xl' />
                  </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}