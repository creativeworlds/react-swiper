import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';
import { SwiperOptions } from './types/SwiperOptions';

/* Styles File  */
import './swiper.scss';

/** 
 * @type {Component} SwiperSlider
 * It is used to create swiper slider with react.
 * 
 * @param {ChildNode} children It is used for children elements.
 * @param {string} className It is used for className.
 * @param {boolean} autoplay It is used for autoplay.
 * @param {string} name It is used for name.
 * @param {object} breakpoints It is used for breakpoints.
 * @param {number} spaceBetween It is used for space between two slide.
 * @param {number} slidesPerView It is used for preview slide number.
 */
export default function SwiperSlider({ className, children, autoplay, breakpoints, name, spaceBetween, slidesPerView }: SwiperOptions) {
  return (
    <Swiper
      allowSlidePrev={true}
      allowSlideNext={true}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      breakpoints={breakpoints}
      autoplay={autoplay && {
        delay: 5000,
      }}
      loop={autoplay}
      navigation={{
        nextEl: `.swiper-button-next.${name}`,
        prevEl: `.swiper-button-prev.${name}`,
      }}
      pagination={{
        clickable: true,
        el: `.swiper-pagination.${name}`,
      }}
      modules={[Navigation, Pagination, Autoplay, Thumbs]}
      className={`${name} swiper swiper-horizontal ${className} `}
      id={name}>
      {children}
    </Swiper>
  );
}
