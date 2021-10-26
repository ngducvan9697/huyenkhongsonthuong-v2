"use strict";
setTimeout(function () {
    var preloader = document.querySelector(".preload");
    if (preloader) {
        preloader.classList.add("close");
    }
}, 500);
var categoryButton = document.querySelector(".category-toogle");
if (categoryButton) {
    categoryButton.addEventListener("click", function () {
        var parent = categoryButton.parentElement;
        if (parent) {
            parent.classList.toggle("show");
        }
    });
}
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
attachToggleClassForElement(".close-contact-form", ".newsletter-container", "show");
