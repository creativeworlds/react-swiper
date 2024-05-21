import { ReactNode } from "react";

/** 
 * @typedef {object} BreakPoint
 */
export type BreakPoint = {
    allowSlidePrev?: boolean;
    allowSlideNext?: boolean;
    slidesPerView: number;
    spaceBetween: number;
}

/** 
 * @typedef {object} BreakPoints
 */
export type BreakPoints = {
    [width: number]: BreakPoint;
}

/** 
 * @typedef {object} SwiperOptions
 */
export type SwiperOptions = {
    name: string;
    children: ReactNode,
    className: string,
    autoplay?: boolean,
    slidesPerView?: number;
    spaceBetween: number,
    breakpoints?: BreakPoints;
}