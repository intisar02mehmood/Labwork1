// script.js

// Image Slider
let slideIndex = 1;

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Initially, you might want to start with the first slide displayed.
showSlide(slideIndex);

// Form Validation
function validateForm() {
  const name = document.forms["contactForm"]["Name"].value;
  const email = document.forms["contactForm"]["Email"].value;
  const message = document.forms["contactForm"]["Message"].value;

  if (name === "" || email === "" || message === "") {
    alert("All fields must be filled out");
    return false;
  }
}
    $("#fadeInButton").hover(function () {
      $("#animatedDiv").fadeIn();
    });
