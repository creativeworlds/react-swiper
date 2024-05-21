import { Swiper } from "../types/Swiper";

/** 
 * @type {Component} SwiperNext
 * It is used for next side scroll button.
 * 
 * @param {ChildNode} children It is used for add children elements.
 * @param {string} className It is used for add className.
 */
export default function SwiperNext({ children, className }: Swiper) {
    return (
        <div className={`swiper-button-next ${className}`}>
            {children}
        </div>
    )
}
