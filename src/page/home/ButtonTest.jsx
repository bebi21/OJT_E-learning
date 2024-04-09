import React from "react";
import { useSwiper } from "swiper/react";
import icon_prev from "../../img/home_img/icon_prev.png";
import icon_next from "../../img/home_img/icon_next.png";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className='swiper-nav-btns flex justify-center'>
      <div className=''>
        <button
          className='w-[80px] h-[80px]'
          onClick={() => swiper.slidePrev()}>
          <img src={icon_prev} alt='icon' />
        </button>
        <button
          className='w-[80px] h-[80px]'
          onClick={() => swiper.slideNext()}>
          <img src={icon_next} alt='icon' />
        </button>
      </div>
    </div>
  );
};
