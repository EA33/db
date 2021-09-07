import Swiper, { Navigation, Parallax, Controller } from 'swiper/core';
Swiper.use([Navigation, Parallax, Controller]);

(() => {
    new Swiper('.slider-1', {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 2,
        freeMode: true,
        watchSlidesProgress: false,
    });

    new Swiper('.slider-2', {
        loop: true,
        speed: 1200,
    });

})();


