import { Swiper, SwiperSlide } from 'swiper/react';
import { Data } from '@utils/index';
import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/styles.css';
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="project_sliders"
      >
        {
            Data.sliders.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className='w-[350px] h-[320px] scale-100'>
                    <img src={item} className='w-full h-full rounded-2xl' />
                  </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}