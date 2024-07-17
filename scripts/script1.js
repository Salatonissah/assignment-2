document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    const Images = gallery.querySelectorAll("img");
    images.forEach(function (image) {
        image.addEventListener.addEventListener("click", function () {
            const modal = document.querySelector(".modal");
            modal.classList.add("open");
            modal.querySelector("img").src = image.src;
        });
    });
});
