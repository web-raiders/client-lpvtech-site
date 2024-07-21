import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import { SlideOne, SlideTwo, SlideThree, SlideFour } from '@assets/images';
import { Button } from '../common';
import "@styles/styles.css";
import { GoArrowRight } from "react-icons/go";

const sliders = [SlideOne, SlideTwo, SlideThree, SlideFour]
SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination ]);
const carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      className="mySwiper"
    >
      {sliders.map((item, i) => (
        <SwiperSlide key={i}>
            <section className='w-full pt-40 min-h-[120vh]' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url(${item})`}}>
                <div className='container w-full mx-auto flex-col flex-wrap items-center justify-center text-center text-white md:w-3/4 md:mt-20 lg:w-2/4 lg:mt-15'>
                    <h6 className="text-xs font-bold uppercase md:text-2xl">Welcome to Tanago</h6>
                    <h1 className=" text-4xl pt-5 font-bold md:text-6xl">Cleaner Energy for a Cleaner World</h1>
                    <h4 className="text-lg pt-6 font-bold md:text-2xl">Help protect the environment by powering your home with 100% renewable energy.</h4>
                    <div className="flex justify-center items-center space-x-4 mt-10">
                        <Button path="#" className="py-4 px-24 font-bold text-white bg-green rounded-full baseline hover:bg-darkBlue" text="Get a Quote" />
                        <Button path="#" className="flex justify-center items-center font-bold py-4 px-24 text-white bg-transparent border-solid border-2 border-white rounded-full baseline hover:text-green hover:border-green" icon={<GoArrowRight size={"25px"} className='pl-1 pt-1' />} text="Discover More" />
                    </div>
                </div>
            </section>
        </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default carousel