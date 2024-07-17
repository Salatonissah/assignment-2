document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector(".nav-toggle");
    navToggle.addEventListener("click", function () {
        document.querySelector("nav").classList.toggle("open");
    });
});