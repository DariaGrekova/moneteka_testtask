import Swiper, { Pagination, Navigation, Mousewheel } from 'swiper';

export function sliders() {
    // простые слайдеры
    const simpleSliders = document.querySelectorAll('.js-simple-slider');
    if (simpleSliders) {
        simpleSliders.forEach((slider) => {
            const simpleSlider = new Swiper(slider, {
                modules: [Navigation],
                speed: 400,
                spaceBetween: 0,
                slidesPerView: 'auto',
                navigation: {
                    nextEl: slider.parentNode.querySelector('.slider-btn-next'),
                    prevEl: slider.parentNode.querySelector('.slider-btn-prev'),
                    disabledClass: 'slider-btn-disabled'
                },
            });
        });
    }

    // баннер
    const bannerSlider = document.querySelector('.banner__slider');

    if (bannerSlider) {
        new Swiper(bannerSlider, {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            modules: [Navigation, Mousewheel],
            mousewheel: {
                releaseOnEdges: true,
            },
            navigation: {
                nextEl: bannerSlider.parentNode.querySelector('.slider-btn-next'),
                prevEl: bannerSlider.parentNode.querySelector('.slider-btn-prev'),
                disabledClass: 'slider-btn-disabled'
            },
        });
    }
}
