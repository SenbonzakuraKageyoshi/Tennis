window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 0,

        loop: true,

        direction: 'horizontal',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        breakpoints: {
            530: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            815: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1190: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
           
        }
    });
})