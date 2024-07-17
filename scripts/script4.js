document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate");
    elements.forEach(function(element) {
        element.addEventListener("mouseover", function() {
            element.classList.add("animated");
        });
        element.addEventListener("mouseout", function(p) {
            element.classList.remove("animated");
        })
    })
})