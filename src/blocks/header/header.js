import Swiper, { Navigation, Controller, Pagination, Parallax } from 'swiper';
Swiper.use([Navigation, Pagination, Controller, Parallax]);
(() => {
    let slider2 = new Swiper('.slider-2', {
        spaceBetween: 15,
        speed: 1200,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        // var moveToClickedNumber = function (swiper) { swiper.swipeTo(swiper.clickedSlideIndex) }
        //
        // autoScrollOffset: 2,
        // onSlideClick: moveToClickedNumber,
        // initialSlide: 0,
    });

    let slider = new Swiper('.slider-1', {
        // slidesPerGroup: 2,
        slidesPerView: 1,
        loop: true,
        speed: 1200,
        parallax: true,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });
    slider2.controller.control = slider;
    // renderBullet: function (index, className) {
    //     return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },

    // slider2.on('slideChange', function () {
    //     console.log('slider2.realIndex', slider2.realIndex);
    // });

})();


