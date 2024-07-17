document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;
        if (name - "" || email- "" || message- "") {
            alert("Please fill out this field.");
        } else {
            alert("thank you for the message!");
        }
    });
});