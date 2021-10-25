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
