"use strict";
setTimeout(function () {
    var preloader = document.querySelector(".preload");
    if (preloader) {
        preloader.classList.add("close");
    }
}, 500);
function attachToggleClassForElement(objectAttach, objectDestination, affectClass) {
    var element = document.querySelector(objectAttach);
    if (element) {
        element.addEventListener("click", function () {
            var destination = document.querySelector(objectDestination);
            if (destination) {
                destination.classList.toggle(affectClass);
            }
        });
    }
}
attachToggleClassForElement(".category-toogle", ".category-dropdown", "show");
attachToggleClassForElement(".mail-icon", ".newsletter-container", "show");
attachToggleClassForElement(".newsletter-container .close-element", ".newsletter-container", "show");
attachToggleClassForElement(".close-contact-form", ".newsletter-container", "show");
attachToggleClassForElement(".search-icon", ".search-bg", "show");
attachToggleClassForElement(".search-bg .close-element", ".search-bg", "show");
attachToggleClassForElement(".close-search", ".search-bg", "show");
var headerSwiper = new Swiper(".main-slider-container", {
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
var miniSwiper = new Swiper(".mini-slider-container", {
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 25,
    thumbs: {
        swiper: headerSwiper,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
