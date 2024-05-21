import { Swiper } from "../types/Swiper";

/** 
 * @type {Component} SwiperPrev
 * It is used for previous side scroll button.
 * 
 * @param {ChildNode} children It is used for add children elements.
 * @param {string} className It is used for add className.
 */
export default function SwiperPrev({ children, className }: Swiper) {
    return (
        <div className={`swiper-button-prev ${className}`}>
            {children}
        </div>
    )
}
