let slideIndex = 0;
const slides = document.getElementsByClassName("slide-image");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // 3 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);
