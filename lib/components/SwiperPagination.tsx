
/** 
 * @type {Component} SwiperPagination
 * It is used for pagination button.
 * 
 * @param {string} className It is used for add className.
 */
export default function SwiperPagination({ className }: { className: string }) {
    return (
        <div className={`swiper-pagination ${className}`}></div>
    )
}
