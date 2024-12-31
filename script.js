document.addEventListener("DOMContentLoaded", function () {
    var envelope = document.getElementById("envelope");

    envelope.addEventListener("click", function () {
        envelope.classList.toggle("open");
        envelope.classList.toggle("close");
    });
});
